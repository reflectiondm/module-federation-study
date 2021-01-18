/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin');
const ModuleFederationPlugin = require('webpack').container
  .ModuleFederationPlugin;

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
  plugins: [
    new LoadablePlugin(),
    new ModuleFederationPlugin({
      name: 'microfrontend-clicker',
      library: { type: 'var', name: 'website2' },
      filename: 'clicker.js',
      exposes: {
        './Clicker': './src/common/Clicker',
      },
      shared: {
        react: {
          import: 'react', // the "react" package will be used a provided and fallback module
          shareKey: 'react', // under this name the shared module will be placed in the share scope
          shareScope: 'default', // share scope with this name will be used
          singleton: true, // only a single version of the shared module is allowed
        },
        'react-dom': {
          singleton: true, // only a single version of the shared module is allowed
        },
      },
    }),
  ],
  output: {
    filename: 'client.js',
    publicPath: '/client/', // "/" in the beginning of the path is mandatory, otherwise the script path will be relative to the current page, e.g. localhost:3000/clicker/client/client.js instead of localhost:3000/client/client.js
    path: path.resolve(__dirname, '../build/client'),
  },
};
