const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resume = require('./json/resume.json');

const config = {
    entry: './dataToHtml/index.pug',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.pug/,
            loaders: ['html-loader', {
                loader: 'pug-html-loader',
                options: {
                    data: { ...resume }
                }
            }
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './dataToHtml/index.pug'
        })
    ]
};
module.exports = config;
