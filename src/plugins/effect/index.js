import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);

const plugin = () => ({
  name: "@vuepress/plugin-effect",
  clientConfigFile: path.resolve(__dirname, "./effectPlugin.js"),
});

export default plugin;
