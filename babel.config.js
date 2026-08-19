const { plugins } = require('@babel/preset-env/lib/plugins-compat-data');

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        '@env': 'react-native-dotenv',
      },
    ],
  ],
};
