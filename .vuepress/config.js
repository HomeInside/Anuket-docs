module.exports = {
  title: 'Anuket Docs',
  description: 'Awesome Google maps Utils.',
  base: '/projects/anuket/',
  themeConfig: {
    dest: 'vuepress',
    sidebar: [{
        title: 'Guia',
        collapsable: false,
        children: [
          '/docs/guide/getting-started',
          '/docs/guide/installation',
          '/docs/guide/requirements'
        ]
      },
      {
        title: 'Metodos',
        collapsable: false,
        children: [
          '/docs/modules/getting-started',
          '/docs/modules/methods',
          '/docs/modules/run',
          '/docs/modules/zoom',
          '/docs/modules/center-map',
          '/docs/modules/center-over-origin'
        ]
      },
      '/docs/menu/extensions',
      '/docs/menu/references',
      '/docs/menu/faq',
      '/docs/menu/contribute',
      '/docs/menu/changelog'
    ],
    nav: [
      { text: 'Guia', link: '/docs/guide/getting-started' },
      { text: 'Metodos', link: '/docs/modules/getting-started' }
    ],
    editLinks: false,
    repo: 'HomeInside/Anuket',
    docsRepo: 'HomeInside/Anuket'
  }
}