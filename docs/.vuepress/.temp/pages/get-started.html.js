import comp from "C:/Users/Administrator/Documents/ebook/zheteng-selfhost/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"引言\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1735005884000,\"contributors\":[{\"name\":\"ppmoon\",\"username\":\"ppmoon\",\"email\":\"272305610@qq.com\",\"commits\":2,\"url\":\"https://github.com/ppmoon\"}]},\"filePathRelative\":\"get-started.md\"}")
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
