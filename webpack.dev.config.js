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
    app: [ 'webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server', './src/index.jsx' ],
    vendor: [ 'react' ]
  },

  output: {
    path: path.resolve('./public/bundle/'),
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

  resolve: {
    root: [
      path.resolve(SrcPath),
    ],
    extensions: [ '', '.js', '.jsx' ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  ],

  devServer: {
    port: 3000,
    contentBase: './public',
    hot: true,
    historyApiFallback: true,
    lazy: false,
    inline: true,
    progress: true,
    colors: true
  }
};

module.exports = config;
