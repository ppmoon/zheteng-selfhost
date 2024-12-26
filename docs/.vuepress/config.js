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
        title: '开始动手！搭建自己的“云”',
        collapsable: true,
        children: [
          '/one_do_it.md'
        ]
      },
      {
        title: '我的私人存储空间',
        collapsable: true,
        children: [
          '/two_cloud_drive.md'
        ]
      },
      {
        title: '自建“娱乐中心”',
        collapsable: true,
        children: [
          '/three_media_center.md'
        ]
      },
      {
        title: '让工作学习更高效',
        collapsable: true,
        children: [
          '/four_efficiency_work.md'
        ]
      },
      {
        title: '智能家居的第一步',
        collapsable: true,
        children: [
          '/five_ha.md'
        ]
      },
      {
        title: '不断提升，享受自建云的乐趣',
        collapsable: true,
        children: [
          '/six_enjoy.md'
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
