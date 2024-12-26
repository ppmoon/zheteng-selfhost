export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/five_ha.html", { loader: () => import(/* webpackChunkName: "five_ha.html" */"C:/Users/Administrator/Documents/ebook/zheteng-selfhost/docs/.vuepress/.temp/pages/five_ha.html.js"), meta: {"title":"智能家居的第一步"} }],
  ["/four_efficiency_work.html", { loader: () => import(/* webpackChunkName: "four_efficiency_work.html" */"C:/Users/Administrator/Documents/ebook/zheteng-selfhost/docs/.vuepress/.temp/pages/four_efficiency_work.html.js"), meta: {"title":"让工作学习更高效"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/Administrator/Documents/ebook/zheteng-selfhost/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"引言"} }],
  ["/one_do_it.html", { loader: () => import(/* webpackChunkName: "one_do_it.html" */"C:/Users/Administrator/Documents/ebook/zheteng-selfhost/docs/.vuepress/.temp/pages/one_do_it.html.js"), meta: {"title":"开始动手！搭建自己的“云”"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Administrator/Documents/ebook/zheteng-selfhost/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"折腾——我的自建云之旅"} }],
  ["/six_enjoy.html", { loader: () => import(/* webpackChunkName: "six_enjoy.html" */"C:/Users/Administrator/Documents/ebook/zheteng-selfhost/docs/.vuepress/.temp/pages/six_enjoy.html.js"), meta: {"title":"不断提升，享受自建云的乐趣"} }],
  ["/three_media_center.html", { loader: () => import(/* webpackChunkName: "three_media_center.html" */"C:/Users/Administrator/Documents/ebook/zheteng-selfhost/docs/.vuepress/.temp/pages/three_media_center.html.js"), meta: {"title":"自建“娱乐中心”"} }],
  ["/two_cloud_drive.html", { loader: () => import(/* webpackChunkName: "two_cloud_drive.html" */"C:/Users/Administrator/Documents/ebook/zheteng-selfhost/docs/.vuepress/.temp/pages/two_cloud_drive.html.js"), meta: {"title":"我的私人存储空间"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Administrator/Documents/ebook/zheteng-selfhost/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
