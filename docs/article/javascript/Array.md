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

```javascript
let array = ['a','b','c']
array.length = 2
console.log(array[2]) //undefined

let { length } = ['a','b','c']
console.log(length) //3
```



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

### 复制和填充方法

fill()和copyWithin()方法用于填充数组，都不会改变原数组的大小，但是会改变原数组

| 方法\参数    | value                            | start                    | end                                                          |
| ------------ | -------------------------------- | ------------------------ | ------------------------------------------------------------ |
| fill()       | 填充值，必选                     | 插入开始位置，可选       | 插入结束位置（默认length，不包括本身），负数从末尾开始       |
| copyWithin() | 复制到指定目标索引开始位置，必选 | 元素复制的起始位置，可选 | 停止复制的索引位置（默认length，不复制此位置的值），负数从末尾开始 |

同：①都会静默忽略超出数组边界、零长度以及方向相反的索引范围，意思就是这些情况的索引范围不会执行

```javascript
#fill()
let array = [0,1,2,3,4,5]
console.log(array.fill(9,2,4)) //[0,1,9,9,4,5]
#copyWithin()
let array = [0,1,2,3,4,5]
console.log(array.copyWithin(2,0,3)) //[0,1,0,1,2,5]

```

### 转换方法

数组转字符串：toString()和toLocaleString()

```javascript
let array = ['a', 1, 2, 3, 4, 5]
console.log(array.toString()) //a,1,2,3,4,5
console.log(array.toLocaleString())  //a,1,2,3,4,5
```

返回原始值：valueOf()

```javascript
let array = ['a', 1, 2, 3, 4, 5]
console.log(array.valueOf()) //['a', 1, 2, 3, 4, 5]
```

join()方法：可以返回用任意分隔符隔开的字符串

```javascript
let array = ['a', 1, 2, 3, 4, 5]
console.log(array.join('||')) //a||1||2||3||4||5
```

以上方法都不改变原始数组

### 栈方法

推入方法：push() ，在数组末尾插入任意数量的元素，返回新的数组长度

弹出方法：pop()，删除数组最后一个元素，返回弹出的数组元素

### 队列方法

shift()方法：输出数组的第一个元素，并返回该元素

push()方法：在数组末尾插入任意数量的元素，返回新的数组长度

unshift()方法：在数组头部插入任意数量的元素，并返回新的数组长度

pop()方法：删除数组最后一个元素，返回弹出的数组元素

### 排序方法

reverse()：把数组元素反向排序，返回排序后的数组

sort()：默认将元素升序排序，返回排序后的数组。接受一个比较函数，比较函数接收两个参数，如果第一个承诺书应该排在第二个参数前面，就返回负值；如果两个参数相等，就返回0；如果第一个参数应该排在第二个参数后面，就返回正值

```javascript
let array = [3,5,9,6,2]
console.log(array.sort((a,b)=>{
	return a-b
}))  //[2,3,5,6,9] 升序排序
console.log(array.sort((a,b)=>{
    return b-a
})) //[9,6,5,3,2] 降序排序
```

以上方法改变原数组，返回调用他们数组的引用

### 操作方法

连接数组：concat()