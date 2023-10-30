import { hopeTheme } from "vuepress-theme-hope";
import baseConfig from "./theme-config/base";
import featureConfig from "./theme-config/feature";
import layoutConfig from "./theme-config/layout";
import appearanceConfig from "./theme-config/appearance";

export default hopeTheme({
  ...baseConfig,
  ...featureConfig,
  ...layoutConfig,
  ...appearanceConfig,

  plugins: {
    blog: true,

    comment: {
      // You should generate and use your own comment service
      provider: "Waline",
      serverURL: "https://waline-comment.vuejs.press",
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      // 支持 chart 图表
      // chart: true,
      // 支持代码案例
      // demo: true,
      // 支持 flowchart 图表
      // flowchart: true,
      // Mermaid 图表
      // mermaid: true,
      // 导入文件
      // include: true,
      // 交互演示
      // playground: {
      //   presets: ["ts", "vue"],
      // },
      // Tex 语法
      // katex: true,
      // 上下角标
      // sub: true,
      // sup: true,
      // 幻灯片
      // revealjs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
      // Vue 交互演示
      // vuePlayground: true,
      // gfm: true,
      // vPre: true,

      // 自定义对齐
      align: true,
      // 属性支持
      attrs: true,
      // 代码块分组
      codetabs: true,
      // 支持 echarts 图表
      echarts: true,
      // 标记
      mark: true,
      // 选项卡
      tabs: true,
      // 图片
      figure: true,
      imgLazyload: true,
      imgSize: true,
      // 样式化
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
    },

    /* components: {
      components: ["Badge", "PDF"],
    }, */
  },
});
