const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resume = require('./json/resume.json');

const config = {
    entry: './dataToHtml/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].bundle.js'
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
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ],
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader',
            ],
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader',
            ],
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
