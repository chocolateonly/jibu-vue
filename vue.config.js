module.exports = {
  devServer: {
    port: 8085, // 端口号
    host: '0.0.0.0',
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: 'http://localhost:8085' // 配置跨域处理,只有一个代理
    // proxy: {
    //   '/api': {
    //     target: 'https://63fc8a63.r5.cpolar.top/api',
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //       '^/api/': ''
    //     }
    //   },
    // },
  }
}
