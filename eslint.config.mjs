import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import _import from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    ignores: ['**/dist', '**/.eslintrc.cjs'],
  },
  ...fixupConfigRules(
    compat.extends(
      'next/core-web-vitals',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'plugin:react-hooks/recommended',
      'plugin:import/typescript',
      'plugin:import/recommended'
    )
  ),
  {
    plugins: {
      'react-refresh': reactRefresh,
      prettier: fixupPluginRules(prettier),
      import: fixupPluginRules(_import),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        tsconfigRootDir: 'C:\\testspace\\cracker-nextjs',
      },
    },

    settings: {
      'import/resolver': {
        node: {},

        typescript: {
          directory: './src',
        },
      },

      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
    },

    rules: {
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],

      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],

      'jsx-a11y/no-autofocus': 0,

      'import/order': [
        'error',
        {
          groups: [
            'type',
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'unknown',
          ],

          pathGroups: [
            {
              pattern: 'react*',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@hooks/*',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@pages/*',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@components/*',
              group: 'internal',
              position: 'after',
            },
          ],

          pathGroupsExcludedImportTypes: ['@tanstack*'],

          alphabetize: {
            order: 'asc',
          },
        },
      ],
    },
  },
]
