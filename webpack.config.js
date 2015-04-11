var BowerWebpackPlugin = require('bower-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  target: 'web',
  entry: {
    index: './blocks/index/index.js',
    tasks: './blocks/tasks/tasks.js',
    base: './blocks/base/base.js'
  },
  output: {
    path: './dist',
    filename: '[name].js',
    chunkFilename: "[id].js",
    // publicPath: '/dist/js/'
  },
  module: {
    loaders: [
      { test: /\.jade$/, loader: "jade" },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      },
      {test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, loader: "file-loader?name=[name].[ext]"}
    ],
    noParse: /\.min\.js/
  },
  resolve: {
    modulesDirectories: ['node_modules', __dirname]
  },
  plugins: [
    new BowerWebpackPlugin({
      excludes: /.*\.less/
    }),
    new webpack.ProvidePlugin({
      $:      "jquery",
      jQuery: "jquery"
    }),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin("[name].css"),
    new webpack.optimize.CommonsChunkPlugin("base", "base.bundle.js")
  ]
};
