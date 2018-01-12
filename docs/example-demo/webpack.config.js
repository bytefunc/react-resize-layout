const output_path = "js";

module.exports = {
    entry: "./src/index.js",
    output: {
        path: `${__dirname}/${output_path}`,
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};
