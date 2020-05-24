module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../resources/public/fonts/',
                            publicPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    }
}