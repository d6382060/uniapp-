"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      ctx: "",
      points: [],
      img: ""
    };
  },
  onLoad(params) {
    this.img = params.url;
    this.ctx = common_vendor.index.createCanvasContext("mycanvas", this);
    this.ctx.drawImage(this.img, 50, 50, 300, 300);
    this.ctx.save();
    this.ctx.draw();
    this.ctx.lineWidth = 4;
    this.ctx.lineCap = "round";
    this.ctx.lineJoin = "round";
  },
  methods: {
    touchstart: function(e) {
      let startX = e.changedTouches[0].x;
      let startY = e.changedTouches[0].y;
      let startPoint = { X: startX, Y: startY };
      this.points.push(startPoint);
      this.ctx.beginPath();
    },
    touchmove: function(e) {
      let moveX = e.changedTouches[0].x;
      let moveY = e.changedTouches[0].y;
      let movePoint = { X: moveX, Y: moveY };
      this.points.push(movePoint);
      let len = this.points.length;
      if (len >= 2) {
        this.draw();
      }
    },
    touchend: function() {
      this.points = [];
    },
    draw: function() {
      let point1 = this.points[0];
      let point2 = this.points[1];
      this.points.shift();
      this.ctx.moveTo(point1.X, point1.Y);
      this.ctx.lineTo(point2.X, point2.Y);
      this.ctx.stroke();
      this.ctx.draw(true);
    },
    clear: function() {
      let that = this;
      common_vendor.index.getSystemInfo({
        success: function(res) {
          let canvasw = res.windowWidth;
          let canvash = res.windowHeight;
          that.ctx.clearRect(0, 0, canvasw, canvash);
          that.ctx.draw(true);
          that.ctx.drawImage(that.img, 50, 50, 300, 300);
          that.ctx.save();
          that.ctx.draw();
        }
      });
    },
    finish: function() {
      common_vendor.index.canvasToTempFilePath({
        canvasId: "mycanvas",
        success: function(res) {
          let path = res.tempFilePath;
          let currpage = getCurrentPages();
          let beforpage = currpage[currpage.length - 2];
          beforpage.$vm.imgurl.push(path);
          common_vendor.index.navigateBack();
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.touchstart && $options.touchstart(...args)),
    b: common_vendor.o((...args) => $options.touchmove && $options.touchmove(...args)),
    c: common_vendor.o((...args) => $options.touchend && $options.touchend(...args)),
    d: common_vendor.o((...args) => $options.finish && $options.finish(...args)),
    e: common_vendor.o((...args) => $options.clear && $options.clear(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
