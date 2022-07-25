---
author: 菜鸡小谢
time: 2022/3/31
category: 日常开发踩坑
title: uniapp样式穿透问题
original: true
---

### **前言**

我在使用uniapp开发微信小程序毕设时，使用::v-deep对子组件进行样式穿透时，微信小程序中总是不生效，h5却没问题。

### **原因**

1、使用样式穿透时的页面必须要在pages.json中进行注册

### **补充**

1、非H5端默认并未启用 scoped，如需要隔离组件样式可以在 style 标签增加 scoped 属性，H5端为了隔离页面间的样式默认启用了 scoped

2、App.vue中引入的style默认未加scoped，全局样式可以从这里引入

