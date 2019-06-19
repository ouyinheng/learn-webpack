module.exports = {
  entry: {
    main:'./main.js',
    app: './app.js'
  },
  output: {
    filename: "[name].bundle.js",
    path: __dirname+"/dist",
    publicPath: ""
  }
}