module.exports = {
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
          '/get-started/',
          '/install/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/input',
          '/components/tabs',
          '/components/grid',
        ],
        collapsable: false,
      }
    ]
  },
  title: 'Rain UI',
  description: 'Just playing around'
}
