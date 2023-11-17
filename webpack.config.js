const path = require('path'); // Sistema de modulos CommonJS

module.exports = {
    mode: 'production', // ou building
    entry: './assets/js/index.js',
    output: {
        path: path.resolve(__dirname, 'assets', 'js', 'bundle'),
        filename: 'bundle.js'
    }, 
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            } 
        },
        {
            test: /\.css$/,
            use: ['style-loader','css-loader']
        }
    ]
    },
    devtool: 'source-map'
};