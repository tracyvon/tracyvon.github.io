import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "一点记录",
    icon: "book",
    children: [
      { text: "Csharp", link: "/posts/csharp" },
      { text: "Frontend", link: "/posts/frontend" },
    ],
  },
]);
