module.exports = {
  configureWebpack:{
    resolve:{
      // extensions:[],
      alias:{
        '@':'src',
        'assets':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views'
      }
    }
  }
}
