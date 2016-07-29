module.exports = function(api) {
  var WebpackDevServer = require('webpack-dev-server')
  var webpack = require('webpack')
  var url = require('url')
  var webpackConfig = require('../webpack/webpack.dev.js')
  var config = require('../config')

  webpackConfig.entry.bundle.unshift('webpack-dev-server/client?http://localhost:' + config.appServer.port + '/')

  var webpackServer = new WebpackDevServer(webpack(webpackConfig), {
    contentBase: 'client',
    historyApiFallback: true,
    displayModules: true
  })

  return webpackServer
}