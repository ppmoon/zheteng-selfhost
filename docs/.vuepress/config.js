import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  lang: 'zh-CN',

  title: '折腾——我的自建云之旅',
  description: '一本讲述如何在家中自建云服务的电子书',

  theme: defaultTheme({
    logo: 'https://images.zheteng.tech/cloud.svg',

    navbar: ['/', '/get-started'],
    sidebar: [
      {
        title: '引言',
        collapsable: false,
        children: [
          '/get-started.md'
        ]
      },
      {
        title: '准备',
        collapsable: false,
        children: [
          '/prepare/prepare.md'
        ]
      },
    ]
  }),

  bundler: viteBundler(),

  // 添加 Mermaid 插件
  plugins: [
    mdEnhancePlugin({
      // 你的选项
      mermaid:true
    }),
  ],
})
