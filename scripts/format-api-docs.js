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

// Format each operation’s description to clean extra spaces and newlines before saving it
operations.forEach(operation => {
    const lines = operation.description.split('\n');

    const { formatted } = lines.reduce((acc, line) => {
        const trimmed = line.trim();

        if (acc.formatted.length === 0 && trimmed === '') return acc;

        // Preserve blank lines only when transitioning from content to empty lines
        if (trimmed === '' && !acc.prevWasEmpty) {
            acc.formatted.push('');
            acc.prevWasEmpty = true;
        } else if (trimmed !== '') {
            acc.formatted.push(trimmed);
            acc.prevWasEmpty = false;
        }

        return acc;
    }, {
        formatted: [],
        prevWasEmpty: true
    });

    descriptionMap.set(operation.operationId, formatted.join('\n     * '));
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
