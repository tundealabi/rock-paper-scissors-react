module.exports = {
    entry: '/',
    output: {
        filename: '[name]-[contenthash].bundle.js',
        path:__dirname + "/dist"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react',
                        {'plugins':['@babel/plugin-proposal-class-properties']}]
                }
            }
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/, use:
                    {
                        loader: 'file-loader', //Added file-loader to handle the svg,png,jpg,gif files from our images
                        options: {
                            name: '[name]-[hash].[ext]', //Also configured it to add a hash to their filenames
                            outputPath: 'images', //Configured file-loader to add our images to an imgs directory in dist
                            publicPath: 'images/'
                        }
                    }
            }
        ]
    }
}