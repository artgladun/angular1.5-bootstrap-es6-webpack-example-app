var webpackServer = require('./server.webpack.js')
var config = require('../config')

webpackServer().listen(config.appServer.port, function(){
    console.log('webpack server is working on port: ' + config.appServer.port)
})