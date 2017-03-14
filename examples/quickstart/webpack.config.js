module.exports = {
  entry: {
    filename: 'babel-polyfill',
  },
  output: {
    filename: `examples/quickstart/build.js`
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
}