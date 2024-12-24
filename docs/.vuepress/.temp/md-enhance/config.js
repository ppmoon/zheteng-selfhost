import Mermaid from "C:/Users/Administrator/Documents/ebook/zheteng-selfhost/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";

export default {
  enhance: ({ app }) => {
    app.component("Mermaid", Mermaid);
  },
};
