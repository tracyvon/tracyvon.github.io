import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import effect from "../plugins/effect/index.js";
import dynamicTitle from "../plugins/dynamic-title/index.js";
import canvasNest from "../plugins/canvas-nest/index.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { ohmylive2dPlugin } from "vuepress-plugin-oh-my-live2d";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "前端攻城喵",
  description: "前端攻城喵's blog",
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
  plugins: [
    effect(),
    dynamicTitle({
      showText: "✧*｡ (ˊᗜˋ*) ✧*",
      hideText: "◝(⑅•ᴗ•⑅)◜",
      recoverTime: 5000,
    }),
    canvasNest(),
    ohmylive2dPlugin({
      source: "./white-cat",
      models: {
        path: "/model.json",
      },
      sayHello: false,
      tips: false,
    }),
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
});
