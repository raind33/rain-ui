module.exports = {
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'test') {
      // fix vue启动单元测试dart-sass不能识别@import 'scss文件'，不打包scss
      const scssRule = config.module.rule('scss')
      scssRule.uses.clear()
      scssRule
        .use('null-loader')
        .loader('null-loader')
    }
  }
}
