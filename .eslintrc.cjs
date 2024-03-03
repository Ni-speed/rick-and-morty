module.exports = {
  extends: '@it-incubator/eslint-config',
  overrides: [
    {
      files: ['**/*.stories.tsx', '**/*.test.ts', '**/*.test.tsx'],
      rules: {
        'react-hooks/rules-of-hooks': 'off',
        'no-console': 'off',
      },
    },
  ],
  plugins: ['jest'],
  env: {
    jest: true,
  },
}