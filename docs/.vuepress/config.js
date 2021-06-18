module.exports = {
  title: "菜鸡小谢",
  description: "学习之余瞎写点东西",
  head: [["link", { rel: "icon", href: "/logo.jpg" }]],
  themeConfig: {
    logo: "/logo.jpg",
    lastUpdated: "Last Updated",
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "前端基础相关",
        ariaLabel: "Language Menu",
        items: [{ text: "数组api详解", link: "array/" }],
      },
    ],
  },
};
