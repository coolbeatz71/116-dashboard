import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const apiFilePath = join(__dirname, '../src/shared/api/generated/116.api.ts');

const swaggerUrl = 'http://localhost:5025/swagger/v1/swagger.json';
const swaggerResponse = await fetch(swaggerUrl);
const swagger = await swaggerResponse.json();

const descriptionMap = new Map();

const operations = Object.values(swagger.paths)
    .flatMap(methods => Object.values(methods))
    .filter(op => op.operationId && op.description);

/**
 * Formats a description block using the same logic as the Dart script.
 *
 * Rules:
 * - Trims leading/trailing whitespace from each line
 * - Skips leading empty lines
 * - Removes blank lines between consecutive bullet points
 * - Preserves blank lines after section headers (lines ending with ':')
 * - Adds blank line before section headers (unless it's a bullet after header)
 * - Removes trailing empty lines
 */
function formatDescription(description) {
    const lines = description.split('\n');
    const formatted = [];
    let prevWasEmpty = true;
    let prevWasBullet = false;
    let prevWasHeader = false;

    for (let i = 0; i < lines.length; i++) {
        const trimmed = lines[i].trim();
        const isEmpty = trimmed === '';
        const isBullet = trimmed.startsWith('-');
        const isHeader = trimmed.endsWith(':') || trimmed.endsWith(':**');
        const isMarkdownHeader = trimmed.startsWith('**') && trimmed.endsWith(':**') && !isBullet;
        const isBoldBullet = isBullet && trimmed.includes('**');

        // Skip leading empty lines
        if (formatted.length === 0 && isEmpty) continue;

        if (isEmpty) {
            // Add blank line only after headers or between different sections
            const shouldAddBlank = prevWasHeader || (formatted.length > 0 && !prevWasBullet && !prevWasEmpty);

            if (shouldAddBlank) formatted.push('');

            prevWasEmpty = true;
            continue;
        }

        // Add blank line before markdown headers or before regular headers that follow bullets
        const needsBlankBefore = formatted.length > 0 &&
            ((isMarkdownHeader && !prevWasEmpty) ||
             (isHeader && !isBoldBullet && prevWasBullet));

        if (needsBlankBefore) formatted.push('');

        formatted.push(trimmed);
        prevWasEmpty = false;
        prevWasBullet = isBullet;
        prevWasHeader = isHeader;
    }

    // Remove trailing empty lines
    while (formatted.length > 0 && formatted[formatted.length - 1] === '') {
        formatted.pop();
    }

    return formatted.join('\n     * ');
}

// Format each operation's description to clean extra spaces and newlines before saving it
operations.forEach(operation => {
    const formattedDesc = formatDescription(operation.description);
    descriptionMap.set(operation.operationId, formattedDesc);
});

let content = readFileSync(apiFilePath, 'utf-8');

// Replace descriptions in generated file with formatted ones from swagger.json
content = content.replace(
    /\/\*\*\s*\n\s*\* @description (.+?)\n\s*\*\s*\n\s*\* @tags (.+?)\n\s*\* @name (\w+)/gs,
    (_, description, tags, operationId) => {
        const formattedDesc = descriptionMap.get(operationId) || description;
        return `/**\n     * @description ${formattedDesc}\n     *\n     * @tags ${tags}\n     * @name ${operationId}`;
    }
);

writeFileSync(apiFilePath, content, 'utf-8');

// \x1b[32m = green color, \x1b[0m = reset color
console.log('\x1b[32m✔\x1b[0m API documentation formatted successfully');
