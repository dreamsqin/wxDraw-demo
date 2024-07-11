//index.js
//获取应用实例
const app = getApp()
var  wxDraw= require("../../../../util/wxdraw.min.js").wxDraw;
var Shape = require("../../../../util/wxdraw.min.js").Shape;
var AnimationFrame = require("../../../../util/wxdraw.min.js").AnimationFrame;


Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    wxCanvas:null


  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindtouchstart:function(e){
    // 检测手指点击事件
    // console.log(e);
    this.wxCanvas.touchstartDetect(e);
    
  },
  bindtouchmove:function(e){
    // 检测手指点击 之后的移动事件
    // console.log(e);        
    this.wxCanvas.touchmoveDetect(e);
  },
  bindtouchend:function(){
     //检测手指点击 移出事件
    this.wxCanvas.touchendDetect();
  },
  bindtap:function(e){
    // console.log(e);    
    this.wxCanvas.tapDetect(e);
  },
  bindlongpress:function(e){
    // console.log(e);
    this.wxCanvas.longpressDetect(e);
  },
  onLoad: function () {
    /** 
     * 
     */
    // console.log(requestAnimationFrame);
    var context = wx.createCanvasContext('circle')
    this.wxCanvas = new wxDraw(context, 0, 0, 400, 500);

    // var path ="";
    // wx.getImageInfo({
    //   src: "./1.png",
    //   success: function (res) {
        // ctx.drawImage('./1.jpg', 0, 0, 158, 104)        
        // path = res.path;
    //   },
    //   fail: function (e) {
    //     console.log(e);
    //   }
    // })
   

    // Fill with gradient


    // this.wxCanvas = new wxDraw(context,0,0,400,500);

    /**
     * 由于 小程序没有Dom 操作，所以没法获取canvas高度以及绘图的起点
     * 所以 wxDraw初始化的时候 需要设置 以便点击检测的时候使用
    */


    let img = new Shape('image', { x: 100, y: 300,w:100,h:100, file:"./1.png"}, 'fill', true)
  

    // console.log(circle2);
    // wx.chooseImage({
    //   success: function (res) {
    //     console.log(res);
    //   }
    // })
    this.wxCanvas.add(img);
    // circle2.setOrigin([100,10]);
    img.animate({x:"+100",w:1000,h:1000,rotate:Math.PI/2},{duration:5000}).start(10)
    // circle2.updateOption(
    //   { rotate:-Math.PI/4}
    // );
    // circle2.bind('tap',function(){
    //   // console.log('aaaa')
    // })
    // ctx.draw()
  },
  onUnload:function(){
    this.wxCanvas.clear(); //推荐这个
  }
  
})
