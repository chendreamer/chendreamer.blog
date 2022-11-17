# webpack
## 初始化
```
yarn init
yarn add webpack webpack-cli --save-dev
```
## plugin
* html-webpack-plugin 打包html网页
* mini-css-extract-plugin 把css打包到单独文件
* Optimize CSS Assets Webpack Plugin 压缩css文件

## loader
* style-loader
* postcss-loader

## 知识点
+ process.env.NODE_ENV  
   在node中，有全局变量process表示的是当前的node进程。process.env包含着关于系统环境的信息，但是process.env中并不存在NODE_ENV这个东西。**NODE_ENV是一个用户自定义的变量，在webpack中它的用途是判断生产环境或开发环境。**

+  