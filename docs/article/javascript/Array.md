---
author: 菜鸡小谢
time: 2021/7/1
category: javascript
tags: jsArray
title: js数组api
original: true
meta:
  - name: 数组方法
    content: js数组完整api
---

### 创建数组

```js
//使用构造函数创建
let array = new Array();

//使用数组自变量创建
let array = [];

//使用form函数创建,可将类数组转换为数组
let array = Array.from('array')
console.log(array) //['a','r','r','a','y']

//使用of函数创建，可将一组参数转换为实例
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
//利用instanceof，局限性：只有一个全局上下文时才能使用
let array = []
console.log(array instanceof Array) //true

//利用isArray方法
console.log(Array.isArray(array)) //true
```

### 迭代器方法

在es6中，Array的原型上暴露了3各用于检测数组内容的方法：keys()，values()，entries()

```javascript
let array = ['a','b','c']

//keys方法返回数组索引的迭代器
console.log(array.keys()) //[0,1,2]

//values方法返回数组元素的迭代器
console.log(array.values())//['a','b','c']

//entries方法方法返回键值对
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
let array = [0,1,2,3,4,5]

//fill()
console.log(array.fill(9,2,4)) //[0,1,9,9,4,5]

//copyWithin()
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

```javascript
//普通连接
let array1 = ['a','b','c']
console.log(array1.concat('d','e')) //[ 'a', 'b', 'c', 'd', 'e' ]

//嵌套数组连接
let array2 = ['d','e']
console.log(array1.concat(array2)) //[ 'a', 'b', 'c', 'd', 'e' ]

//重写打平数组参数的行为
array2[Symbol.isConcatSpreadable] = false
console.log(array1.concat(array2)) 
//['a','b','c',['d','e'[Symbol(Symbol.isConcatSpreadable)]: false ]]
```

截取数组：slice(start,end)，返回截取后的新数组（不包含结束索引对应的元素），不影响原数组

```javascript
let array = ['a','b','c','d','e']
console.log(array.slice(2,4)) //['c','d']
```

splice()方法

参数：index。必须，整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。

howmany。必需。要删除的项目数量。如果设置为 0，则不会删除项目。

item1...itemN。可选，向数组添加新的项目

功能：

①删除任意位置的数组元素，返回删除后的数组元素

```javascript
//删除两个元素
let array = ['a','b','c','d']
console.log(array.splice(1,2)) //['b','c']
```

②插入元素，返回空数组，改变原数组

```javascript
let array = ['a','b','c','d']
console.log(array.splice(2,0,'1','2'))//[]
console.log(array)//['a','b','c','1','2','d']
```

③替换数组元素。

```javascript
let array = ['a','b','c','d']
console.log(array.splice(1,1,'g','h'))//['b']
console.log(array)//['a','g','h','c','d']
```

### 搜索和位置方法

1、严格相等 '==='

```javascript
let array = ['a','b','c','d']

//indexOf(value,start)方法，从数组第一项开始匹配，找到元素就返回索引，找不到就返回-1
console.log(array.indexOf('b'))//1
console.log(array.indexOf('h'))//-1

//lastIndexOf(value,start)方法，从数组末尾第一项开始匹配，找到元素就返回索引，找不到就返回-1
console.log(array.indexOf('b'))//1
console.log(array.indexOf('h'))//-1

//includes(value,start),从数组第一项开始匹配，找到元素返回true，找不到返回false
console.log(array.includes('m')) //false
```

2、断言函数

断言函数接收三个参数：元素、索引和数组本身

```javascript
const people = [
    {
        name:'mmm',
        age:27
    },
    {
		name:'bb',
        age:29
    }
]

//find(),返回第一个匹配的元素
console.log(people.find((e,index,array) => e.age < 28))//{ name: 'mmm', age: 27 }

//findIndex()，返回第一个匹配的元素
console.log(people.find((e,index,array) => e.age < 28))//0
```

### 迭代方法

每个方法接收两个参数：以每一项为参数运行的函数，以及可选的作为函数运行上下文的作用域对象。喊出接收三个参数：数组元素，数组索引、数组本身

```javascript
let array = [1,2,3,4,5,6,7]

//every()方法：对数组的每一项都运行传入的函数，如果每一项都返回true，则这个方法返回true
console.log(array.every((item, index, array) => item > 0))//true

//filter():对数组的每一项都运行传入的函数，函数返回true的项目会组成新的数组返回
console.log(array.filter((item, index, array) => item > 2))//[ 3, 4, 5, 6, 7 ]

//forEach():对数组的每一项都执行传入的函数，没有返回值，相当于for循环
array.forEach((item, index, array) => console.log(item)) 
/*
1
2
3
4
5
6
7
*/

//map:对数组每一项都执行传入的函数，返回有每次函数调用的结果构成的数组
console.log(array.map((item, index, array) => item * 2)) //[2,  4,  6, 8,10, 12, 14]

/*some():对数组的每一项都执行传入的函数，如果有一项返回true，则该方法返回true，反之返回false，可以和every方法比较*/
console.log(array.some((item, index, array) => item > 8)) //false

```

### 归并方法

reduce()和reduceRight()：这两个方法都迭代数组的所有项，并在此基础上构建一个最终的返回值，reduce方法从第一项遍历到最后一项，reduceRight从最后一项遍历到第一项

​     这两个方法都接受两个参数，对每一项都会运行的归并函数，以及归并起点的初始值（可选）

​	传入函数的参数有四个：上一个归并值，当前值，当前值的索引，数组本身。这个函数返回的任何值都会作为下一次调用同一个函数的第一个参数，如果没有传入归并起点初始值，则第一次迭代从数组的第二项开始，所以传入归并函数的第一个参数是数组的第一项，第二个参数是数组的第二项

```javascript
let array = [1,2,3,4,5]

//reduce()
console.log(array.reduce((pre,cur,index,array)=> {
    return pre+cur
},10)) //运行过程：10+1+2+3+4+5 最终结果：25

//reduceRight()
console.log(array.reduce((pre,cur,index,array)=> {
    return pre+cur
},10)) //运行过程：10+5+4+3+2+1 最终结果：25
```



第一次写博客文章，写的不好，大家见谅！