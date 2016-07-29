var config = require('../config')
var webpackConfig = require('./webpack.config.js')

webpackConfig.devtool = 'source-map'

module.exports = webpackConfig