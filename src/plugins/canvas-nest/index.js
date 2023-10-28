import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);

const plugin = (options = {}) => ({
  name: "@vuepress/plugin-canvas-nest",
  clientConfigFile: path.resolve(__dirname, "./canvasNestPlugin.js"),
  /* define() {
    const { color = "0,0,0", pointColor = "0,0,0", opacity = 0.5, count = 150, zIndex = -1 } = options;

    return {
      COLOR: color,
      POINT_COLOR: pointColor,
      OPACITY: opacity,
      COUNT: count,
      Z_INDEX: zIndex,
    };
  }, */
});

export default plugin;
