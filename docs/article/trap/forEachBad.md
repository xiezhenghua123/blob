---
author: 菜鸡小谢
time: 2021/8/16
category: javascript
title: forEach中return失效
original: true
---

### **问题描述**

今天开发过程中遇到了一个关于 forEach 问题，总是 return undefind。代码如下：

```javascript
 hanleMoney(code, monObjArr, range) {
      if (Object.keys(range).length !== 0) {
        return [parseInt(range.min), parseInt(range.max)]
      }
      monObjArr.forEach(item => {
        if (item.code === code) {
          return [item.min, item.max]

        }
      })
    },
```

上面这段代码执行时，总是返回 undefind。

### **解决办法**

经过查找网上资料发现，forEach 方法使用 return 的作用是结束此次循环，后面的代码还是会继续执行，而且 forEach 中不能使用 break 和 contuine 关键字。

正确代码如下：

```javascript
hanleMoney(code, monObjArr, range) {
      if (Object.keys(range).length !== 0) {
        return [parseInt(range.min), parseInt(range.max)]
      }
      let arr
      monObjArr.forEach(item => {
        if (item.code === code) {
          arr = [item.min, item.max]
          return
        }
      })
      return arr
    }
```
