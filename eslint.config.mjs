import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  prettier,
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 2016,
      sourceType: 'module',
      parser: tsparser,
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // Possible errors
      'no-empty': [
        'error',
        {
          allowEmptyCatch: true,
        },
      ],

      // Best practices
      curly: ['error', 'all'],
      eqeqeq: [
        'error',
        'always',
        {
          null: 'ignore',
        },
      ],
      'no-caller': 'error',
      'no-new': 'error',
      'no-with': 'error',

      // Variables
      'no-use-before-define': [
        'error',
        {
          functions: false,
        },
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',

      // ES6+
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
        },
      ],
      'import/newline-after-import': ['error'],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'never',
        },
      ],

      // TS-specific
      '@typescript-eslint/no-require-imports': 'error',
    },
  },
];
