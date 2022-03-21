"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      src: "../../static/logo.png",
      imgurl: []
    };
  },
  methods: {
    toedimg() {
      common_vendor.index.navigateTo({ url: `/pages/index/index?url=${this.src}` });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.src,
    b: common_vendor.o((...args) => _ctx.imageError && _ctx.imageError(...args)),
    c: common_vendor.o((...args) => $options.toedimg && $options.toedimg(...args)),
    d: common_vendor.f($data.imgurl, (item, index, i0) => {
      return {
        a: item,
        b: index
      };
    }),
    e: common_vendor.o((...args) => _ctx.imageError && _ctx.imageError(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
