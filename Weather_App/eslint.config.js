import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import eslintConfigBase from "eslint-config-eslint/base";
import eslintConfigCJS from "eslint-config-eslint/cjs";
import eslintConfigFormatting from "eslint-config-eslint/formatting";
import pluginReact from "eslint-plugin-react";

/// <reference types="eslint/experimental-flat-config" />

export default defineConfig([
  // Base JS + formatting for general files
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      js,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...eslintConfigBase.rules,
      ...eslintConfigFormatting.rules,
      semi: ["error", "always"], // company formatting enforcement
      quotes: ["error", "double"],
      "no-console": "warn",
      "no-debugger": "error",
    },
  },

  // Node/CommonJS tools
  {
    files: ["eslint.config.js", "tools/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...eslintConfigCJS.rules,
      ...eslintConfigFormatting.rules,
    },
  },

  // React support (optional, include only if using React)
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: pluginReact,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off", // for React 17+
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
    },
  },
]);
