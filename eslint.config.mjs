import globals from 'globals'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react/configs/recommended.js'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import { fixupConfigRules } from '@eslint/compat'
import react from 'eslint-plugin-react'

export default [
  eslint.configs.recommended, // eslint 팀에서 권장하는 규칙세트
  ...tseslint.configs.recommended,
  ...fixupConfigRules(reactPlugin),
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], // ESLint가 검사할 파일 확장자 설정
    plugins: { ...react, prettier: eslintPluginPrettier },
    languageOptions: {
      ecmaVersion: 'latest', // default
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser },
    },
    settings: {
      react: { version: 'detect' }, // 사용자가 설치한 버전으로 선택
    },
    rules: {
      ...eslintPluginPrettier.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    },
    ignores: ['node_modules', 'dist', 'public', '.next'],
  },
]
