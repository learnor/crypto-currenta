const path = require('path');
// const webpack = require('webpack');

module.exports = {
  entry: "./lib/main.js",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/,/\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env'],
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js','*']
  },
};
