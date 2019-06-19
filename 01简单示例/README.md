### 说明
如果安装了全局webpack可以使用
```
webpack
```
如果没有全局安装
```
webpack --config webpack.config.js
```
1、webpack.config.js
```
  //nodejs内置模块
  const path = require('path');
  module.exports = {
    //设置打包环境为生产模式还是开发模式，默认为生产模式(production)，生产模式的代码会进行压缩，删除空格和回车等
    mode: 'development',
    //入口文件
    entry: './app.js',
    output: {
      //输出文件夹
      path: path.resolve(__dirname, 'dist'),
      //输出文件名
      filename: '*.bundle.js'
    }
  }
```
2、app.js
```
  console.log('hello world')
```