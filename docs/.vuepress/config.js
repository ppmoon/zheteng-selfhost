import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: '折腾——我的自建云之旅',
  description: '一本讲述如何在家中自建云服务的电子书',

  theme: defaultTheme({
    logo: 'https://images.zheteng.tech/cloud.svg',

    navbar: ['/', '/get-started'],
  }),

  bundler: viteBundler(),
})
