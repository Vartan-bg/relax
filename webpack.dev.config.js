const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'dev-bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    devServer: {
        open: true,
        port: 8081,
        hot: true,
        writeToDisk: true,
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }]
    }
};