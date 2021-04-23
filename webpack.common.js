// Common loaders and rules

module.exports = {
    entry: "./src/index.js",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: ["babel-loader"],

            }
        ]
    }
}