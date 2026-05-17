import eslintReact from '@eslint-react/eslint-plugin';

const reactRecommendedTypeScript = eslintReact.configs['recommended-typescript'];

const reactConfig = [
  {
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      ...reactRecommendedTypeScript.plugins,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      ...reactRecommendedTypeScript.settings,
    },
    rules: {
      ...reactRecommendedTypeScript.rules,
      '@eslint-react/no-missing-key': 'warn',
    },
  },
];

export default reactConfig;
