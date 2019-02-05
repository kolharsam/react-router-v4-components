var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/ReactRouterv4Usage.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'ReactRouterv4Usage.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    devtool: 'source-map',
    stats: {
        errorDetails: true
    },
}