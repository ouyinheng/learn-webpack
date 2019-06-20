module.exports = {
  mode: 'development',
  enter: {
    main: 'app.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname+'/dist'
  }
}