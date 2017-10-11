# 环境搭建
## 初始化项目
```
npm init -y
```

## 安装后端依赖的模块
```
npm install body-parser express express-session -S
```
- body-parser 解析请求体
- express node开发框架
- express-session 会话中间件

## 安装前端依赖的模块
```
npm install es6-promise history react react-dom react-redux react-router-dom react-router-redux@next history react-swipe react-transition-group redux redux-thunk swipe-js-iso whatwg-fetch -S
```
- es6-promise 在低版本浏览器上兼容promise
- history 操作历史
- react react核心库
- react-dom DOM操作相关的库
- react-redux 把react和redux连接起来的库
- react-router-dom react路由库
- react-router-redux 把react路由和redux结合起来的库
- react-swipe swipe-js-iso react版轮播图库
- react-transition-group react动画
- redux 状态管理库
- redux-thunk  在redux中实现异步操作
- whatwg-fetch 让浏览器兼容fetch

## 安装开发依赖模块
```
npm install babel-core babel-loader babel-preset-es2015 babel-preset-stage-0  babel-preset-react   url-loader file-loader  less less-loader style-loader css-loader webpack webpack-dev-server html-webpack-plugin babel-plugin-transform-decorators-legacy -D
```
- babel-core babel核心库
- babel-loader babel加载器
- babel-preset-es2015 把es6转成es5的预设
- babel-preset-stage-0 把es7转成es5的预设
- babel-preset-react 把react转成es5预设
- css-loader 加载css文件加载器
- style-loader 注入css模块的加载器
- less less-loader 把less编译成css
- file-loader 加载二进制文件
- webpack webpack打包器
- webpack-dev-server webpack开发服务器
- html-webpack-plugin 自动产出html的webpack插件

##  配置启动命令
```
"scripts": {
   "dev": "webpack-dev-server --open"
  },
```

##  webpack配置文件
```
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  //入口文件
  entry: './src/main.js',
  //输出配置
  output:{
    path:path.resolve('./build'),//打包后存放的目录
    filename:'bundle.js',//打包后存放的文件名
  },
  //配置调试工具，报错的话会提示源码的位置
  devtool:'cheap-module-source-map',
  module:{
    rules:[
      {
        test:/\.js$/,
        use:'babel-loader',
        exclude:/node_modules/
      },
      {
        test:/\.less$/,
        use:["style-loader","css-loader","less-loader"]
      },
      {
        test:/\.(png|jpg|gif|bmp)$/,
        use:'url-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ]
}
```