'use strict';

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    watchOptions: {
        ignored: "/node_modules/",
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-plain-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                type: 'javascript/auto',
                test: /\.(json|html)/,
                use: [{
                    loader: 'file-loader',
                    options: { name: '[name].[ext]' },
                }],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.json', '.vue'],
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    output: {
        path: path.resolve(__dirname, './public/js'),
        filename: 'select.js',
        library: "select.js",
        libraryTarget: "umd",
        umdNamedDefine: true,
    },
};
