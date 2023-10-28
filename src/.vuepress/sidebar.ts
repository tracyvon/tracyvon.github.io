import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "一点记录",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
  ],
});
