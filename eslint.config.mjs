import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginTypescript from "@typescript-eslint/eslint-plugin";
import eslintParserTypescript from "@typescript-eslint/parser";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Configuraciones básicas de Next.js
  ...compat.extends("next/core-web-vitals"),

  // Configuración para Prettier
  ...compat.extends("prettier"),

  // Configuración global para React (evita tener que importarlo en cada archivo)
  {
    languageOptions: {
      globals: {
        React: "readonly",
      },
    },
  },

  // Configuración específica para archivos TypeScript
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@typescript-eslint": eslintPluginTypescript,
    },
    languageOptions: {
      parser: eslintParserTypescript,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: 2022,
        sourceType: "module",
      },
    },
    rules: {
      // Reglas específicas de TypeScript
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },

  // Reglas para React Hooks
  {
    files: ["**/*.tsx", "**/*.jsx", "**/*.js", "**/*.ts"],
    plugins: {
      "react-hooks": eslintPluginReactHooks,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },

  // Reglas globales para todos los archivos
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx", "**/*.mjs", "**/*.cjs"],
    rules: {
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],
      "prefer-const": "warn",
      "no-unused-expressions": "warn",
      "no-duplicate-imports": "error",
      "no-undef": "error",
      eqeqeq: ["error", "always", { null: "ignore" }],
      curly: ["warn", "multi-line", "consistent"],
      "max-len": [
        "warn",
        {
          code: 100,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
        },
      ],
    },
  },

  // Reglas específicas para archivos de configuración
  {
    files: ["*.config.js", "*.config.ts", "*.config.mjs"],
    rules: {
      "no-console": "off",
    },
  },
];

export default eslintConfig;
