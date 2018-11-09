var path = require('path');

module.exports = {
  entry: path.join(__dirname, "frontend","bench_bnb.jsx"),
  output: {
    filename: './bundle.js',
    path: path.join(__dirname, "app", "assets", "javascripts")
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
