var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');

const buildpath = path.join(__dirname, 'build');

module.exports = {
  entry: [
    './index.jsx'
  ],
  output: {
    path: buildpath,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: loaders
  }
};
