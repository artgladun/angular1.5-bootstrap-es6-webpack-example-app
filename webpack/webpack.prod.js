var config = require('../config')
var webpackConfig = require('./webpack.config.js')

var webpack = require('webpack')
var WebpackMd5Hash = require('webpack-md5-hash')

webpackConfig.plugins.push( new WebpackMd5Hash() )
webpackConfig.plugins.push( new webpack.optimize.DedupePlugin() )
webpackConfig.plugins.push( new webpack.optimize.UglifyJsPlugin({
    comments: false,
    compress: {
        sequences: false,
        properties: false,
        dead_code: false,
        drop_debugger: false,
        conditionals: false,
        comparisons: false,
        evaluate: false,
        booleans: false,
        loops: false,
        unused: false,
        hoist_funs: false,
        if_return: false,
        join_vars: false,
        cascade: false,
        side_effects: false,
        warnings: false
    },
    mangle: false
}))

module.exports = webpackConfig