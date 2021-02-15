module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  env: {
    dev: {
      plugins: ['istanbul']
    }
  }
}
