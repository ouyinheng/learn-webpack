### Loader

需要的 loader

- css-loader ---- 处理 css 文件（主要是处理图片的 url）；
- style-loader ---- 将转换后的 css 文件以 style 标签形式插入 html 中；
- postcss-loader ---- 兼容浏览器 css，自动添加前缀
- sass-loader ---- 用 sass 的时候
- babel-loader ---- 处理使用 es6 等高版本 js 代码的
- url-loader ---- 处理一些小图片，我们为了减少请求数，所以需要将图片转为 base64 字符串
- file-loader ---- 将文件，在进行一些处理后（主要是处理文件名和路径），移动打包后的目录中
- html-withimg-loader ---- 将引用的 html 文件中的 img 文件，或 background-image:url()，转为可被 url-loader 等其他 loader 处理的东西。
- vue-loader ---- 用 vue 的时候

每一个 loader 的配置规则都可以在<a href="https://www.webpackjs.com/loaders/" target="_black">官方文档</a>中查看

1、 css-loader

> `npm i -D css-loader`

```
module: {
  rules: [
    {
      test: /\.css$/,//正则匹配文件后缀名
      use: [ 'style-loader', 'css-loader' ]//针对css结尾的文件使用的loader
    }
  ]
}
```

2、 style-loader

> `npm i -D style-loader`

```
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" }
      ]
      /** or
      * use: [
      *   "style-loader", "css-loader"
      * ]
      */
    }
  ]
}
```

3、postcss-loader
在根目录新建`postcss.config.js`

> `npm i -D postcss-loader`

```
module.exports = {
  plugins: {
    autoprefixer: {}
  }
}
```

webpack.config.js

```
 module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'css-loader', 'style-loader', 'postcss-loader' ]
      }
    ]
  }
```

4、babel-loader

#### 安装

> `npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env webpack`

4.1、在`webpack.config.js`配置

```
rules: [
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }
]
```

4.2、在项目根目录添加一个 babel.config.js 文件

```
module.exports = {
  presets: [
    "@babel/preset-env"
  ]
}
```
