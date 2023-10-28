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
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      revealjs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
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
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    /* components: {
      components: ["Badge", "PDF"],
    }, */
  },
});
