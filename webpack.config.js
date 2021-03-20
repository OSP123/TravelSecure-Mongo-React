const path = require('path');

module.exports = {

  // This is the entry point or start of our react applicaton
  entry: "./app/app.js",

  // The plain compiled JavaScript will be output into this file
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "bundle.js",
    publicPath: '/'
  },

  // This section desribes the transformations we will perform
  module: {
    rules: [
      {
        // Only working with files that in in a .js or .jsx extension
        test: /\.jsx?$/,
        // Webpack will only process files in our app folder. This avoids processing
        // node modules and server files unnecessarily
        include: /app/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      },
      {test: /\.css$/, loaders: ['style-loader', 'css-loader']},
      {test: /\.(png|jpg|jpeg)$/, loader: 'url-loader'}
    ]
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "eval-source-map",
  mode: 'development'
};
