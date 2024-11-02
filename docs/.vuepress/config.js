import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/images/G.ico' }]],
  title: 'GlideWay',
  description: 'GlideWay开发文档',
  base: '/DevelopmentDocs/',
  theme: defaultTheme({
    logo: '/images/G.png',
    navbar: ['/'],
  }),

  bundler: viteBundler(),
})
