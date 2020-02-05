const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename:'bundle.js'
    },
    devServer:{
        contentBase: path.resolve(__dirname, 'public')
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.(css)$/,
                use: ["vue-style-loader", "css-loader"]
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve:{
        alias: {
            vue$: "vue/dist/vue.esm.js"
        },
        extensions: ["*", ".js", ".vue", ".json"]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CopyPlugin([
            {
                from: './public'
            }
        ])
    ]
}