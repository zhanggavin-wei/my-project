// 只要改变vue.config.js文件后，必须重启项目才能生效

// node.js代码风格
module.exports = {
    devServer: {
    //   port: 8888,
      proxy: {
        // 代理，转发
        // 当请求URL中包含 '/soso' 字符串时，才执行代理转发
        '/soso': {
          target: 'https://c.y.qq.com',  // 目标（远程）服务器地址
          ws: true,
          changeOrigin: true
        }
      }
    }
  }
  