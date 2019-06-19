const path = require('path');//nodejs内置模块

module.exports = {
  mode: 'development',//设置打包环境为生产模式还是开发模式，默认为生产模式(production)
  entry: './app.js',//入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),//输出文件夹
    filename: 'demo.bundle.js'//输出文件名
  }
}