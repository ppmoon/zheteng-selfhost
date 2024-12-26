export const themeData = JSON.parse("{\"logo\":\"https://images.zheteng.tech/cloud.svg\",\"navbar\":[\"/\",\"/get-started\"],\"sidebar\":[{\"title\":\"引言\",\"collapsable\":false,\"children\":[\"/get-started.md\"]},{\"title\":\"开始动手！搭建自己的“云”\",\"collapsable\":true,\"children\":[\"/one_do_it.md\"]},{\"title\":\"我的私人存储空间\",\"collapsable\":true,\"children\":[\"/two_cloud_drive.md\"]},{\"title\":\"自建“娱乐中心”\",\"collapsable\":true,\"children\":[\"/three_media_center.md\"]},{\"title\":\"让工作学习更高效\",\"collapsable\":true,\"children\":[\"/four_efficiency_work.md\"]},{\"title\":\"智能家居的第一步\",\"collapsable\":true,\"children\":[\"/five_ha.md\"]},{\"title\":\"不断提升，享受自建云的乐趣\",\"collapsable\":true,\"children\":[\"/six_enjoy.md\"]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
