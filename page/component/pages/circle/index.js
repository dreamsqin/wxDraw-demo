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


    let circle = new Shape('circle', { x: 160, y: 160, r: 40, sA: 0, fillStyle: "#C0D860", strokeStyle: "#CC333F", rotate: 10, lineWidth: 0, needGra: 'line', gra: [[0, '#00A0B0'], [0.2, '#6A4A3C'], [0.4, '#CC333F'], [0.6, '#EB6841'], [1, '#EDC951']]}, 'fill', true)
    let circle1 = new Shape('circle', { x: 160, y: 270, r: 40, sA: Math.PI/2, fillStyle: "#C0D860", strokeStyle: "#CC333F", rotate: 20, lineWidth: 0, needGra: 'circle', gra: [[0, '#00A0B0'], [0.2, '#6A4A3C'], [0.4, '#CC333F'], [0.6, '#EB6841'], [1, '#EDC951']]}, 'fill', true)
    let circle2 = new Shape('circle', { x: 160, y: 360, r: 40, sA: Math.PI, fillStyle: "#FF6600", strokeStyle: "#CC333F", rotate: 30, lineWidth: 0}, 'stroke', true)
    // let circle2 = new Shape('image', { x: 100, y: 300,w:100,h:100, file:"./1.png", lineWidth: 0}, 'fill', true)
  

    // console.log(circle2);
    // wx.chooseImage({
    //   success: function (res) {
    //     console.log(res);
    //   }
    // })
  // console.log(circle2);
    this.wxCanvas.add(circle);
    this.wxCanvas.add(circle1);
    this.wxCanvas.add(circle2);
    // circle2.setOrigin([100,10]);
    // circle2.animate({x:"+10",w:1000,h:1000,rotate:Math.PI/2},{}).start()
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
