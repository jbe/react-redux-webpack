
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');

const buildpath = path.join(__dirname, 'build');

module.exports = {
    entry: [ './index.jsx' ],
    devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
    output: {
        path: buildpath,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: loaders
    },
    devServer: {
        contentBase: buildpath,
        // noInfo: true,
        hot: true,
        inline: true,
        host: "0.0.0.0",
        port: 8080,
        progress: true,
        colors: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
