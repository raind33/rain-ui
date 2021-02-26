const path = require('path')
module.exports = {
  head: [
      ['script', {src: 'https://cdn.bootcdn.net/ajax/libs/three.js/r122/three.min.js'}],
      ['script', {src: 'https://at.alicdn.com/t/font_2321457_ylgwhfga3r8.js'}],
      ['link', { rel: 'icon', href: '/qq.jpg' }]
  ],
  base: '/rain-ui/',
  themeConfig: {

    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/get-started/' },
      { text: '交流', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '指南',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/get-started/'
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/input',
          '/components/tabs',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/popover',
          '/components/slides'
        ],
        collapsable: false,
      }
    ]
  },
  scss: {
    prependData: `
        @import "@styles/_var.scss";
      `
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@styles": path.resolve(__dirname, "../../packages/styles")
      }
    }
  },
  title: 'Rain UI',
  description: 'Just playing around'
}
