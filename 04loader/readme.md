### Loader

需要的loader

- css-loader            ---- 处理css文件（主要是处理图片的url）；
- style-loader          ---- 将转换后的css文件以 style 标签形式插入 html 中；
- vue-loader            ---- 用vue的时候
- postcss-loader        ---- 兼容浏览器css，自动添加前缀
- sass-loader           ---- 用sass的时候
- babel-loader          ---- 处理使用es6等高版本js代码的
- url-loader            ---- 处理一些小图片，我们为了减少请求数，所以需要将图片转为base64字符串
- file-loader           ---- 将文件，在进行一些处理后（主要是处理文件名和路径），移动打包后的目录中
- html-withimg-loader   ---- 将引用的 html 文件中的 img 文件，或background-image:url()，转为可被 url-loader 等其他loader处理的东西。

每一个loader的配置规则都可以在<a href="https://www.webpackjs.com/loaders/" target="_black">官方文档</a>中查看