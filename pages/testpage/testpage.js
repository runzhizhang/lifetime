// pages/testpage/testpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test: "test",
    hidden: true,
    x: 0,
    y: 0
  },
  



  onClick: function(){
    wx.navigateTo({
      url: '../secondpage/secondpage',
    })
  },
  formSubmit: function(e){
    console.log("submit",e.detail.value.inputContext)
  },
  formReset: function(e){
    console.log("reset",e)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onload",this.data)
    // const ctx = wx.createCanvasContext("myCanvas");
    // ctx.setFillStyle("red")
    // ctx.fillRect(10,10,150,75)
    // ctx.draw()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onready",this.data)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onshow",this.data)    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onhide",this.data)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onunload",this.data)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})