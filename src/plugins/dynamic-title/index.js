import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);

const plugin = (options = {}) => ({
  name: "@vuepress/plugin-dynamic-title",
  clientConfigFile: path.resolve(__dirname, "./dynamicTitlePlugin.js"),
  define() {
    const {
      showIcon = "",
      showText = "(/≧▽≦/)咦！又好了！",
      hideIcon = "",
      hideText = "(●—●)喔哟，崩溃啦！",
      recoverTime = 3000,
    } = options;

    return {
      SHOW_ICON: showIcon,
      SHOW_TEXT: showText,
      HIDE_ICON: hideIcon,
      HIDE_TEXT: hideText,
      RECOVER_TIME: recoverTime,
    };
  },
});

export default plugin;
