var path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        mainComponent: './src/ReactRouterv4Usage.jsx',
        secondComponent: './src/helpers/Main.jsx',
        thirdComponent: './src/helpers/Head.jsx',
        fourthComponent: './src/helpers/Routes.jsx',
        fifthComponent: './src/helpers/history.jsx',
        sixthComponent: './src/helpers/Teams.jsx',
        seventhComponent: './src/helpers/one-level/Clubs.jsx',
        eightthComponent: '/src/helpers/one-level/ClubInformation.jsx',
        ninthComponent: '/src/api/api.js'
    },
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
    stats: {
        errorDetails: true
    },
}