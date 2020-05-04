const path = require('path');
var webpack = require('webpack');

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    output: {
        filename: "hash-sdk.js",
        path: path.resolve(__dirname, 'web-script')
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".js"]
    },
    module: {
        rules: [{ test: /\.ts$/, loader: "ts-loader" }]
    },
}