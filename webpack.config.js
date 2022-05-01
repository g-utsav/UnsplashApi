const path = require("path")

module.exports = {
    mode : 'development',
    entry : {
        main : path.resolve(__dirname,'src/scripts/index.js')
    },
    output : {
        path : path.resolve(__dirname,"dist"),
        filename : '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  };