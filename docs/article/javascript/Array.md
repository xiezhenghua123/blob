---
author: 菜鸡小谢
time: 2021/7/1
category: javascript
tags: jsArray
title: js数组api
original: true
---

### 创建数组

```js
#使用构造函数创建
let array = new Array();
#使用数组自变量创建
let array = [];
#使用form函数创建,可将类数组转换为数组
let array = Array.from('array')
console.log(array) //['a','r','r','a','y']
#使用of函数创建，可将一组参数转换为实例
let array = Array.of(1,2,3,4)
```

### 数组空位

使用数组字面量初始化数组时，可以使用一串逗号来创建空位，es6新增的方法普遍将这些空位当成存在的元素，值为undefind。由于行为不一致和存在性能隐患，因此实践中要尽量少用数组空位

### 数组索引

数组属性length，可读也可写

### 检测数组

```javascript
#利用instanceof，局限性：只有一个全局上下文时才能使用
let array = []
console.log(array instanceof Array) //true
#利用isArray方法
console.log(Array.isArray(array)) //true
```

### 迭代器方法

在es6中，Array的原型上暴露了3各用于检测数组内容的方法：keys()，values()，entries()

```javascript
let array = ['a','b','c']
#keys方法返回数组索引的迭代器
console.log(array.keys()) //[0,1,2]
#values方法返回数组元素的迭代器
console.log(array.values())//['a','b','c']
#entries方法方法返回键值对
console.log(array.entries())//[[0,'a'],[1,'b'],[2,'c']]
```

