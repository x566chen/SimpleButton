var webpack = require('webpack')
var path = require('path');

var publicPath = 'http://localhost:3000/';

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './app/main.js'],
  output: {
    path: path.resolve('./public'),
    filename: "bundle.js",
    publicPath: publicPath
  },
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true
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
              }, {
                  loader: "css-loader"
              }
          ]
      }
    ]
},
plugins: [
  new webpack.BannerPlugin('This is created by Cathy'),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
],
}