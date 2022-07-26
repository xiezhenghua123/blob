---
author: 菜鸡小谢
time: 2022/7/25
category: websocket
title: websocket封装
original: true
---

### **webSocket的作用**

用于实时性的数据传输，相对于轮询，性能开销小，实时性高。

### **构造函数**

webSocket(url[,protocols])

url：必传，用于连接的socket链接。

protocols：可选，一个协议字符串或者一个包含协议字符串的数组。用于和服务端协定传输的子协议。

### **常用监听事件**

**open**：当连接建立时，会执行此事件。

**close**：当连接关闭时，会执行的事件（执行error事件后，后面会执行close事件）。

**message**：当接收到服务端的消息时，会执行此事件。

**error**：当连接出现错误时（例如网络断开），会执行此事件。

以上事件可以用addEventListener进行监听，从而执行相应的回调函数。同时也可以利用想用的属性来执行，例如onopen、onclose等。

### **封装**

```javascript
// 默认值,options参数配置
const defaultConfig = {
  isReconnect: true, //是否断线重连
  limitConnect: 10, //重连总次数
  timeout: 5000, //重连时间间隔
  protocols:''  //子协议
}

class Socket {
  limitTime = 0 //将重连总次数存储起来，方便初始化
  receiveCb = null
  instansce = null //socket实例
  limitConnect = 0 //重连总次数
  time = 0 //重连次序
  interval = null
  timeout = 0 //重连时间间隔
  isReconnect = true //是否断线重连

  constructor(url, options, receiveCb) {
    if (!url) {
      throw new Error('URL参数必传')
    }
    if (typeof receiveCb !== 'function') {
      throw new Error('receiveCb must function')
    }
    this.url = url
    this.receiveCb = receiveCb
    const config = { ...defaultConfig, ...options }
    const { limitConnect, timeout, isReconnect， protocols } = config
    this.limitConnect = limitConnect
    this.limitTime = limitConnect
    this.timeout = timeout
    this.isReconnect = isReconnect
    this.instansce = null
    this.instansce = this.connect(url，protocols)
    this.handleEvent()
  }
  handleEvent() {
    this.instansce.onopen = e => {
      this.openHandler(e)
    } //连接上时回调
    this.instansce.onclose = e => {
      this.closeHandler(e)
    } //断开连接时回调
    this.instansce.onmessage = e => {
      this.messageHandler(e)
    } //收到服务端消息
    this.instansce.onerror = e => {
      this.errorHandler()
    } //连接出错
  }
  openHandler() {
    console.log('连接成功！')
    this.reset()
  }
  messageHandler(e) {
    const data = this.getMsg(e)
    this.receiveCb(data)
  }
  reset() {
    clearTimeout(this.interval)
    this.time = 0
    this.limitConnect = this.limitTime
  }
  closeHandler(e) {
    console.log(e.code)
    if (e.code === 1000) {
      console.log('连接已经断开')
      return
    }
    if (this.isReconnect) {
      console.log('连接断开，重连中')
      this.reconnect(this.url)
    }
  }
  errorHandler() {
    console.error('出错了,重连中')
  }

  sendMsg(obj) {
    this.instansce.send(JSON.stringify(obj))
  }
  getMsg(e) {
    return JSON.parse(JSON.parse(e.data))
  }
  close() {
    this.instansce.close(1000)
  }
  reconnect(url) {
    clearTimeout(this.interval)
    if (this.limitConnect > 0) {
      this.limitConnect--
      console.log(`第${++this.time}次重连`)
      this.interval = setTimeout(() => {
        this.instansce = null
        this.instansce = this.connect(url)
        this.handleEvent()
      }, this.timeout)
    } else {
      console.error('重连失败，请检查网络是否连接。')
      clearTimeout(this.interval)
    }
  }
  connect(wsUrl，protocols) {
    let websocket = null
    try {
      websocket = new WebSocket(wsUrl，protocols)
    } catch (e) {
      console.log('catch' + e)
      throw new Error('未检出到websocket连接')
    }
    return websocket
  }
}

export default Socket

```

### **结语**

以上的webSocket封装加入了断开重连机制，但是还存在一定的性能问题。

心跳监测机制暂未加入，需要后端配合。

close、open、mesage、error四种事件未开发，若需开放，可以用events进行事件监听派发开放。

