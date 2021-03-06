/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ModuleFederationPlugin = require('webpack').container
  .ModuleFederationPlugin;

module.exports = {
  entry: './src/server/server.tsx',
  mode: 'production',
  target: 'node',
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
                  targets: { node: 'current' },
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
    new ModuleFederationPlugin({
      name: 'app-shell',
      remotes: {
        clicker: 'clicker@http://localhost:3001/client/clicker.js',
      },
      shared: {
        react: {
          import: 'react', // the "react" package will be used a provided and fallback module
          shareKey: 'react', // under this name the shared module will be placed in the share scope
          shareScope: 'default', // share scope with this name will be used
          singleton: true, // only a single version of the shared module is allowed
          eager: true,
        },
        'react-dom': {
          singleton: true, // only a single version of the shared module is allowed
          eager: true,
        },
      },
    }),
  ],
  externals: [nodeExternals()],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../build/server'),
  },
};
