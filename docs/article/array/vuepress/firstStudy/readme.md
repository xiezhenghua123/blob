---
author: 菜鸡小谢
time: 2021/6/27
category: vuepress
title: vuepress 搭配 vuepress-theme-hope 主题搭建个人博客经历
original: true
---

#### 初始化 vuepress

```bash
mkdir yourBlogName && cd yourBlogName #创建一个文件夹并进入，也可以直接在创建用vscode打开该文件夹
npm init #用npm初始化，也可以用其他的
npm install vuepress -D #安装vuepress
npm install vuepress-theme-hope -D #安装vuepress-theme-hope主题
npm install #最好npm install一下，防止包丢失
```

#### 修改 package.json 文件

添加以下代码

```javascript
"scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
}
```

#### 第一篇文章

1、在根目录下新建 docs 文件夹

2、在 docs 文件夹下面新建 readme.md 文件（这是作为首页）

首页配置参照：https://vuepress-theme-hope.github.io/zh/guide/layout/home/#home

#### vuepress-theme-hope 主题配置

1、在 docs 文件夹下新建.vuepress 文件夹

2、在.vuepress 文件夹下新建 config.js 文件

具体内容：

```javascript
const { config } = require("vuepress-theme-hope")

module.exports = config({
  // your config here
})
#必须要按照以上写法，不能使用vuepress官方文档的写法
#具体配置项参照：https://vuepress-theme-hope.github.io/zh/config/
```
