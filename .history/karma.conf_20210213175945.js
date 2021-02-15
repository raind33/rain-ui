var webpackConfig = require('@vue/cli-service/webpack.config.js')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],

    files: [
      'tests/**/*.spec.js'
    ],
    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [{ type: 'lcov', subdir: '.' }, { type: 'text-summary' }]
    },
    webpack: webpackConfig,

    reporters: ['spec'],

    browsers: ['ChromeHeadless']
  })
}
