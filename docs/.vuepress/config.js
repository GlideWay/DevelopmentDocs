import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: './images/favicon.ico' }]],
  title: 'GlideWay',
  description: 'GlideWay开发文档',
  base: '/DevelopmentDocs/',
  theme: defaultTheme({
    logo: './images/G.png',
    navbar: [
      {
        text: '主页',
        link: '/',
      },
      {
        text: '文档',
        link: '/Docs/',
      },
      {
        text: '更多',
        children: [
          {
            text: '更新日志',
            link: 'https://github.com/GlideWay',
          },
          {
            text: '常见问题',
            link: 'https://github.com/GlideWay',
          }
        ]
      },
      {
        text: 'GitHub',
        link: 'https://github.com/GlideWay'
      }
    ],

// 添加侧边栏配置
sidebar: {
  '/Docs/': [
    {
      text: '文档',
      children: [
        {
          text: '介绍',
          link: '/Docs/',  // 对应 Docs/README.md
        },
        {
          text: '快速开始',
          link: '/Docs/Start',  // 对应 Docs/fuck.md
        },
        // {
        //   text: '基础功能',
        //   collapsible: true,
        //   children: [
        //     '/Docs/basic/installation',
        //     '/Docs/basic/configuration',
        //     '/Docs/basic/usage',
        //   ]
        // },
        // {
        //   text: '进阶功能',
        //   collapsible: true,
        //   children: [
        //     '/Docs/advanced/feature1',
        //     '/Docs/advanced/feature2',
        //   ]
        // },
      ]
    }
  ]
}









  }),

  bundler: viteBundler(),
})
