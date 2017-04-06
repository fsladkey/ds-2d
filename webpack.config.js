var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var plugins = [
  new CommonsChunkPlugin({
      filename: "shared.bundle.js",
      name: "shared"
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV':
      JSON.stringify(process.env.NODE_ENV || 'development')
  })
];

module.exports = {
  context: __dirname,
  entry: "./src/entry.js"
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve('./frontend'),
      path.resolve('./node_modules')
    ]
  }
};
