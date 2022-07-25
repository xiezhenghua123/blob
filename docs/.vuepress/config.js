/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2021-06-19 15:59:12
 * @LastEditors: Xie zhenghua
 * @LastEditTime: 2022-07-25 17:40:50
 */
// let path = require('path')
const { config } = require("vuepress-theme-hope");

module.exports = config({
  base: "/blob/",
  title: "前端坎坷之路", //这里是博客标题
  description: "日常学习总结，没事儿多来逛逛", //博客描述
  dest: "public", //博客部署时输出的文件夹
  head: [
    ["link", {}], //favicon图标设置
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  // theme: path.resolve(__dirname, './theme'), //vuepress挂载的主题
  theme: "vuepress-theme-hope",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  iconPrefix: "icon-",
  themeConfig: {
    displayAllHeaders: true,
    fullscreen: true,
    comment: {
      type: "valine",
      appId: "HIaPJPc3R71AsvedYUYBzlH7-MdYXbMMI", // your appId
      appKey: "G14KGntWvLFpQVqPvydRR1UM", // your appKey
    },
    pwa: {
      cachePic: true,
      maxPicSize: "2048KB",
    },
    mdEnhance: {
      demo: true,
    },
    footer: {
      display: true,
      content: "Copyright 2021 zhenghuaxie All rights Reserved.",
    },
    nav: [
      { text: "首页", link: "/", icon: "home" },
      {
        text: "vuepress",
        link: "/article/vuepress/firstStudy",
        icon: "Vue",
      },
      {
        text: "js高级程序设计",
        prefix: "/article/javascript/",
        icon: "js",
        items: [
          {
            text: "js数组api",
            link: "Array/",
            icon: "js",
          },
          {
            text: "红宝书第十五章-DOM扩展",
            link: "fiften/",
            icon: "js",
          },
        ],
      },
      { text: "vue源码解析", link: "/article/vue/responsive/", icon: "Vue" },
      {
        text: "面经",
        // link: "/article/interview/checkSelf",
        prefix: "/article/interview/",
        icon: "interview",
        items: [
          {
            text: "前端自检清单问题解答",
            link: "checkSelf/",
            icon: "interview",
          },
          {
            text: "浏览器输入url到页面加载完成的全过程解析",
            link: "url/",
            icon: "interview",
          },
        ],
      },
      {
        text: "日常开发踩坑",
        // link: "/article/trap/el-menu",
        prefix: "/article/trap/",
        icon: "goumaixianjing",
        items: [
          {
            text: "el-menu菜单栏选中效果失效问题",
            link: "el-menu/",
            icon: "goumaixianjing",
          },
          {
            text: "forEach中return失效",
            link: "forEachBad/",
            icon: "goumaixianjing",
          },
          {
            text: "常见搜索后，不同tab页展示不同信息的代码方案设计",
            link: "refresh/",
            icon: "goumaixianjing",
          },
          {
            text: "代码回滚的不同方式及其区别",
            link: "git/",
            icon: "goumaixianjing",
          },
          {
            text: "uniapp样式穿透问题",
            link: "uniapp/",
            icon: "goumaixianjing",
          },
          {
            text: "webSocket的封装",
            link: "webSocket/",
            icon: "goumaixianjing",
          },
        ],
      },
    ],
    sidebar: {
      "/article/vuepress/": ["firstStudy"],
      "/article/javascript/": ["Array", "fiften"],
      "/article/vue/": ["responsive"],
      "/article/interview/": ["url", "checkSelf"],
      "/article/trap/": [
        "el-menu",
        "forEachBad",
        "refresh",
        "git",
        "uniapp",
        "webSocket",
      ],
    },
    darkmode: "auto-switch",
    hostname: "https://xiezhenghua123.github.io",
    blog: {
      avatar: "/logo.jpg",
      name: "菜鸡小谢",
      links: {
        QQ: "tencent://message/?uin=1803493121",
        Wechat: "/blob/article/links/weChat/",
        Github: "https://github.com/xiezhenghua123",
      },
    },
  },
  markdown: {
    lineNumbers: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "docs/.vuepress/public",
      },
    },
  },
});
