const { resolve } = require("node:path");
const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
	parser: "@typescript-eslint/parser",
	plugins: [
		"@typescript-eslint"
	],
	parserOptions: {
		project,
	},
	ignorePatterns: ["node_modules/", "dist/"],
	settings: {
		"import/resolver": {
			typescript: {
				project,
			},
		},
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended"
	].map(require.resolve),
}