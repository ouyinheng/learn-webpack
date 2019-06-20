module.exports = {
  mode: 'development',
  enter: {
    main: 'app.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + "/dist"
  },
  module: {
    rule: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader" // 将 JS 字符串生成为 style 节点
      }, {
        loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
      }, {
        loader: "sass-loader" // 将 Sass 编译成 CSS
      }]
    }]
  }
}