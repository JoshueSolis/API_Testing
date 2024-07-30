import globals from 'globals';
import js from '@eslint/js';
import Jest from 'eslint-plugin-jest';

export default [
  js.configs.recommended,
  Jest.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-empty': 'error',
      'no-multiple-empty-lines': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
    },
  },
];
