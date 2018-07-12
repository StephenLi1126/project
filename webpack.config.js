const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:  {
        app:[
            'webpack-dev-server/client?http://localhost:8081/',
            __dirname + "/app/main.js"
        ]
    },
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    mode: "development",
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true,
        port:8081
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
	        test: /\.css$/,
    		use: [
                    {
            	        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
    			    modules: true,
    			    localIdentName: '[name]__[local]--[hash:base64:5]'
			}

		    }
                ]
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        })
    ]
}
