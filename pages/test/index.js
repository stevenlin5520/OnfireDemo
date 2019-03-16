const onfire = require("../../utils/onfire1.0.6.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 执行多次监听事件
   */
  manyExecute(){
    console.log("执行多次订阅事件")
    for(let i=1; i<=3; i++){
      onfire.fire("on",i)
      console.log("测试是否同步事件,在订阅事件发布后显示说明是同步的；否则就异步")
    }
  },

   /**
   * 执行多次同步监听事件
   */
  manySyncExecute(){
    console.log("执行多次同步订阅事件")
    for(let i=1; i<=3; i++){
      onfire.fireSync("onsync",i)
      console.log("测试是否同步事件,在订阅事件发布后显示说明是同步的；否则就异步")
    }
  },

  /**
   * 执行单次监听事件
   */
  oneExecute(){
    console.log("执行单次订阅事件")
    for(let i=1; i<=3; i++){
      onfire.fire("one",i)
      console.log("测试是否同步事件,在订阅事件发布后显示说明是同步的；否则就异步")
    }
  },

  /**
   * 执行单次同步监听事件
   */
  oneSyncExecute(){
    console.log("执行单次同步订阅事件")
    for(let i=1; i<=3; i++){
      onfire.fireSync("onesync",i)
      console.log("测试是否同步事件,在订阅事件发布后显示说明是同步的；否则就异步")
    }
  },

  /**
   * 取消绑定事件unfire
   */
  unExecute(){
    onfire.fire("unfire","111")
    setTimeout(function(){
      console.log("清除事件unfire，测试是否还能执行")
      onfire.un("unfire")
    },500)
    setTimeout(function(){
      console.log("再次执行unfire事件")
      onfire.fire("unfire","000")
    },1000)
  },

  /**
   * 清空所有事件，测试是否能运行其他事件
   */
  clearExecute(){
    onfire.fireSync("onsync",100)
    setTimeout(function(){
      console.log("清空所有事件，测试是否能运行其他事件")
      onfire.clear()
    },500)
    setTimeout(function(){
      console.log("再次执行多次监听函数")
      onfire.fireSync("onsync","000")
    },1000)
  },

  /**
   * 可在上一页面Page中注册事件，进入下一页面之后可修改上一页面Page中的数据
   */
  transferExecute(){
    let pageOnfire = onfire.fireSync("page","给你一个棒棒糖")
  }
})