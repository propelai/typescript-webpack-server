const nodeExternals = require('webpack-node-externals');
const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  target: 'node',
  entry: './src/index.ts',
  externals: [nodeExternals()],
  devtool: 'inline-source-map',
  bail: true,
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|ts)$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
          },
          'eslint-loader',
        ],
      },
    ],
  },
  plugins: [
    new NodemonPlugin({
      ignore: ['src'],
      watch: path.resolve('./build/index.js'),
      // verbose: true,
      events: {
        'start': 'clear',
      },
    }),
  ],
};
