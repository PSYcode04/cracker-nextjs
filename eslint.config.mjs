import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import react from "eslint-plugin-react";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(reactPlugin),
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { ...react } },
  {
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser },
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
];
