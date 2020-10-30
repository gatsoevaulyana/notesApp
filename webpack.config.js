module.exports = {
    entry: "./client/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|server)/,
                loader: "babel-loader",
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components|server)/,
                loader: "babel-loader",
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
                exclude: /(node_modules|bower_components|server)/,
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader",
                exclude: /(node_modules|bower_components|server)/,
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
        ]
    }
};