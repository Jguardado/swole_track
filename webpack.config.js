module.exports = {
  entry: './index.jsx',
  output: {
    filename: './public/bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
      },
      { test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.es6', '.jsx', '.styl'],
  },
  watch: true,
};
