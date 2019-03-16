const onfire = require("../../utils/onfire1.0.6.js")
/**
 * 注册事件
 */
let onfireOn = onfire.on("on",function(data){
  console.log("正在运行可多次执行的订阅事件....."+data)
})
let onfireOne = onfire.one("one",function(data){
  console.log("正在运行单次执行的订阅事件....."+data)
})
let onfireSync = onfire.on("onsync",function(data){
  console.log("正在运行可多次执行的同步订阅事件....."+data)
})
let onfireOneSync = onfire.one("onesync",function(data){
  console.log("正在运行单次执行的同步订阅事件....."+data)
})
let unfire = onfire.one("unfire",function(data){
  console.log("执行unfire事件....."+data)
})

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this
    /**
     * 在Page里面注册一个事件，当下一个页面逻辑执行之后可以回调上一页面（本页面）执行一段逻辑，并可修改页面Data数据
     */
    // var定义的事件是全局的注册事件
    var pageOnfire = onfire.on("page",function(data){
      console.log("执行pageOnfire事件....."+data)
      self.setData({
        data: data
      })
      wx.showModal({
        title: '提醒',
        content: '获取数据:'+data,
        showCancel: false,
        confirmText: '确定',
        confirmColor: '#3CC51F'
      })
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    onfire.un(onfireOn)
    onfire.un(onfireOne)
    onfire.un("onsync")
    onfire.un("onesync")
    onfire.un("unfire")
    onfire.un(pageOnfire)
  },
})