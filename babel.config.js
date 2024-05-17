module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          // '@': './src',
          // "^@/(.+)": "./src/\\1",
          '@features': './src/features',
          '@shared': './src/shared',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        envName: 'MY_ENV',
        path: '.env',
        safe: true,
        allowUndefined: false,
      },
    ],
  ],
};
