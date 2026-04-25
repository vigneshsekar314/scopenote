import js from '@eslint/js';
import ts from 'typescript-eslint';
import solid from 'eslint-plugin-solid';
import prettier from 'eslint-plugin-prettier/recommended';

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      solid,
    },
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      ...solid.configs.typescript.rules,
      'solid/reactivity': 'warn',
      'solid/no-destructure': 'warn',
      'solid/jsx-no-undef': 'error',
    },
  },
  prettier,
);
