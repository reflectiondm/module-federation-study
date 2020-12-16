/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = {
  entry: './src/client/client.tsx',
  mode: 'production',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-typescript',
              '@babel/preset-react',
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'entry',
                  corejs: 'core-js@3',
                },
              ],
            ],
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
              '@loadable/babel-plugin',
            ],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [new LoadablePlugin()],
  output: {
    filename: 'client.js',
    publicPath: 'client/',
    path: path.resolve(__dirname, '../build/client'),
  },
};
