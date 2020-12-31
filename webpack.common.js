module.exports = {
    entry: '/',
    output: {
        filename: '[name]-[contenthash].bundle.js',
        path:__dirname + "/dist/js"
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
            }
        ]
    }
}