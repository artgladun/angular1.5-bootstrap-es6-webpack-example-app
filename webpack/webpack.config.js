var path = require('path')
var config = require('../config')
var aliases = require('./aliases.js')

var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
require('es6-promise').polyfill() // required for postcss

var webpackConfig = {
  entry: {
      bundle: [path.join(config.path.client.root, config.file.js.in.filename)]
  },
  output: {
      path: config.path.dist.root,
      filename: config.file.js.out.filename,
      chunkFilename: config.file.js.out.chunkName,
  },
  resolve: {
      extensions: ['', 'min.js', '.js'],
      root: [config.path.client.root],
      alias: []
  },
  module: {
      noParse: [],
      loaders: [
          {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel',
              query: {
                  presets: ['es2015'],
                  plugins: ['transform-object-assign']
              }
          }, {
              test: /\.html$/,
              loader: 'ngtemplate?relativeTo=' + config.path.client.root + '/!html',
              include: config.path.client.root
          }, {
              test: /\.(scss|css)$/,
              loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
          }, {
              test: /\.(png|gif|jpg)$/,
              loader: 'file-loader?name=./images/[sha512:hash:base64:6].[ext]',
              include: config.path.assets.root
          }, {
              test: /\.(ttf|otf|eot|svg|woff(2)?)(\?.+)?$/,
              loader: 'file-loader?name=./fonts/[sha512:hash:base64:6].[ext]'
          }
      ]
  },
  plugins: [
      new ExtractTextPlugin(config.file.css.filename),
      new HtmlWebpackPlugin({
          inject: 'body',
          template: config.file.html.index,
          version: config.version,
          filename: path.basename(config.file.html.index),
          minify: {
              caseSensitive: true,
              collapseWhitespace: true
          }
      })
  ],
  postcss: [
      autoprefixer({browsers: ['last 2 versions', 'ie > 9']})
  ],
  sassLoader: {
      includePaths: [config.path.node.modules]
  }
}

// use aliases / no parse
for (var alias in aliases) {
  if (aliases.hasOwnProperty(alias)) {
    var file = aliases[alias]
    webpackConfig.resolve.alias[alias] = file
    webpackConfig.module.noParse.push(new RegExp(file))
  }
}

module.exports = webpackConfig;