const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    mode: 'production',
    plugins:[new CleanWebpackPlugin(), new MiniCssExtractPlugin({
        filename: '[name].[contenthash].bundle.css',
        path: __dirname + "/dist/css"
    })],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options:{
                            modules:true
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            '...',
            new CssMinimizerPlugin(),
            new HtmlWebpackPlugin({
                template: "./public/template.html",
                minify: {
                  removeAttributeQuotes: true,
                  collapseWhitespace: true,
                  removeComments: true
                }
              })
        ]
    }
})