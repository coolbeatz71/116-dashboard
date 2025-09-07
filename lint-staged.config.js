export default {
    "*.{jsx,js,json,css,scss,md,tsx,ts}": "biome check --write --error-on-warnings",
    "*.{ts,tsx}": [() => "tsc --skipLibCheck --noEmit"]
};
