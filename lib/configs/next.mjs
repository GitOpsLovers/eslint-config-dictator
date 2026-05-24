import eslintNextPlugin from '@next/eslint-plugin-next';

const nextConfig = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': eslintNextPlugin,
    },
    rules: {
      ...eslintNextPlugin.configs.recommended.rules,
      ...eslintNextPlugin.configs['core-web-vitals'].rules,
    },
  },
];

export default nextConfig;
