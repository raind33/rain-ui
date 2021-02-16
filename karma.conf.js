var webpackConfig = require('@vue/cli-service/webpack.config.js')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],

    files: [
      'dist/**/*.css',
      'tests/**/*.spec.js'
    ],
    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,

    // reporters: ['spec', 'coverage'],

    browsers: ['ChromeHeadless']
  })
}
