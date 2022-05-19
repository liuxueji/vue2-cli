const path = require('path')
// 按需导入vue-router中的VueLoaderPlugin
const {VueLoaderPlugin} = require('vue-loader')
// 区分exports、module.exports和export、export default的区别
module.exports = {
  // 入口文件
  entry:'./src/main.js',
  // 出口文件，包括名字和地址
  output:{
    // 路径不能使用绝对路径，需要使用绝对路径，所以需要借助__dirname，这里引入path适配不同操作系统
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
  // 模块文件，定义模块转换规则
  module:{
    rules:[
      {test:/\.vue$/,use:'vue-loader'},
      {test:/\.s[ca]ss$/,use:['style-loader','css-loader','scss-loader']},
      {
        test:/\.m?js$/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        }
      },
      {test:/\.(png|jpe?g|gif|svg|webp)$/,type:'asset/resource'}
    ]
  },
  // 插件，增强webpack功能，需要组件实例
  plugins:[
    // 这个是vue-loader的库里的插件，处理vue文件中的js和css
    new VueLoaderPlugin()
  ],
  // devServer配置项
  devServer:{
    // 设置根目录文件，就不会在url中有dist了
    static:'dist',
    // 自动打开
    open:true,
    // 设置打开的ip
    host:'local-ip',
    // 通过回调，设置终端打印地址和端口信息
    onListening({server}){
      const {address,port} = server.address()
      console.log(`webpack服务器已经启动：http://${address}:${port}`);
      
    }
  }
}