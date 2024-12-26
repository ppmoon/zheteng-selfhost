import comp from "C:/Users/Administrator/Documents/ebook/zheteng-selfhost/docs/.vuepress/.temp/pages/one_do_it.html.vue"
const data = JSON.parse("{\"path\":\"/one_do_it.html\",\"title\":\"开始动手！搭建自己的“云”\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"准备\",\"slug\":\"准备\",\"link\":\"#准备\",\"children\":[{\"level\":3,\"title\":\"硬件\",\"slug\":\"硬件\",\"link\":\"#硬件\",\"children\":[]},{\"level\":3,\"title\":\"软件\",\"slug\":\"软件\",\"link\":\"#软件\",\"children\":[]},{\"level\":3,\"title\":\"空白电脑到准备环境\",\"slug\":\"空白电脑到准备环境\",\"link\":\"#空白电脑到准备环境\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"one_do_it.md\"}")
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
