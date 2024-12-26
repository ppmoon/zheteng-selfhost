import comp from "C:/Users/Administrator/Documents/ebook/zheteng-selfhost/docs/.vuepress/.temp/pages/prepare.html.vue"
const data = JSON.parse("{\"path\":\"/prepare.html\",\"title\":\"准备\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"硬件\",\"slug\":\"硬件\",\"link\":\"#硬件\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"prepare.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
