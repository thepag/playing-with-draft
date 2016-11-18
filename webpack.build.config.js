/* eslint-disable */

// Webpack Core
var path = require('path');
var webpack = require('webpack');

// helpers
var resolve = path.resolve.bind(null, __dirname);

// Local variables
var SrcPath = resolve('src');

var config = {
  entry: {
    app: [ './src/index.jsx' ],
    vendor: [ 'react' ]
  },
  output: {
    path: path.resolve('./build/bundle/'),
    filename: '[name].bundle.js',
    publicPath: '/bundle/',
    chunkFilename: '[id].js'
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        include: SrcPath,
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js'),
  ],
};

module.exports = config;
