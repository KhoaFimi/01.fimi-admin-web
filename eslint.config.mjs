import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname
})

const eslintConfig = [
	js.configs.recommended,
	eslintPluginPrettierRecommended,
	eslintConfigPrettier,
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		plugins: {
			'simple-import-sort': simpleImportSortPlugin,
			plugin: importPlugin
		},
		rules: {
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
			'import/first': 'error',
			'import/newline-after-import': 'error',
			'import/no-duplicates': 'error',
			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/no-require-imports': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true
				}
			]
		}
	}
]

export default eslintConfig
