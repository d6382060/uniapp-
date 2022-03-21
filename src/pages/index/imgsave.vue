<template>
  <image
    style="width: 200px; height: 200px; background-color: #eeeeee"
    :src="src"
    @error="imageError"
    @click="toedimg"
  ></image>
  <view>以下是编辑好的图片</view>
  <view v-for="(item, index) in imgurl" :key="index">
    <image
      style="width: 200px; height: 200px; background-color: #eeeeee"
      :src="item"
      @error="imageError"
    ></image>
  </view>
</template>

<script>
export default {
  data () {
    return {
      src: '../../static/logo.png',
      imgurl: []
    }
  },
  methods: {
    toedimg () {
      uni.navigateTo({ url: `/pages/index/index?url=${this.src}` })
    }
  },
}
</script>

<style>
</style>