var path = require('path')

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

const config = {
    version: '[chunkhash]',
    path: {
        client: {
            root: resolve('client/source')
        },
        assets: {
            root: resolve('client/assets')
        },
        dist: {
            root: resolve('dist')
        },
        node: {
            modules: resolve('node_modules')
        }
    },
    file: {
        js: {
            in: {
                filename: 'bundle.js'
            },
            out: {
                filename: '[name].[chunkhash].js',
                chunkName: '[id].[chunkhash].js'
            }
        },
        css: {
            filename: '[name].[chunkhash].css'
        },
        html: {
            index: resolve('client/index.html')
        }
    },
    appServer: {
        port: 3000
    }
}

module.exports = config;