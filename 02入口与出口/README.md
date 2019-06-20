### 入口起点
### 单入口
```
  module.exports = {
    entry: './app.js'
  }
```
or
```
module.exports = {
  entry: {
    main: './main.js'
  }
}
```
### 多入口
第二种写法可添加多个入口，如：
```
module.exports = {
  entry: {
    main:'./main.js,
    app: './app.js'
  },
  //此配置将`*.bundle.js` 文件输出到 `/dist`目录中
  output: {
    /**
    * 输出文件的文件名；
    * [name]--使用占位符(substitutions)来确保每个文件具有唯一的名称
    */
    filename: "[name].bundle.js",
    //目标输出的绝对路径
    path: __dirname + '/dist'
  }
}
```
### npm命令
使用`npm init --yes` 强制生成`package.json`文件
在如下代码中添加命令
```
"scripts": {
  "dev": "webpack --config webpack.config.js"
}
```

### 出口
webpack的文档中写到：必须包含以下两项
- filename 用于输出文件的文件名。
- 目标输出目录 path 的绝对路径
```
output: {
  filename: '[name].buldle.js',
  path: __dirname+'/dist'
}
```