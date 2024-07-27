<template>
  <view class="navbar" :style="barStyle">
    <!-- logo文字 -->
    <view class="logo">
      <image class="logo-image" src="@/static/logo-small.png"></image>
      <text class="logo-text">与你结缘于此</text>
    </view>
    <!-- 搜索条 -->
    <view class="search">
      <text class="icon-search">搜索(还没做)</text>
      <text class="icon-scan"></text>
    </view>
  </view>
</template>

<script setup lang="ts">

//获取屏幕安全区域到边框的距离(刘海屏之类的)，底部区域自动适配
const { safeAreaInsets } = uni.getSystemInfoSync()//{top: 44, left: 0, right: 0, bottom: 34}
console.log(safeAreaInsets);
const barStyle = 'padding-top:' + safeAreaInsets?.top + 'px'




</script>

<style lang="scss">
/* 自定义导航条 */
.navbar {
  background-image: url(@/static/images/navigator_bg.png);
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  .logo {
    display: flex;
    align-items: center;
    height: 64rpx;
    padding-left: 30rpx;
    padding-top: 20rpx;

    .logo-image {
      width: 166rpx;
      height: 39rpx;
    }

    .logo-text {
      flex: 1;
      line-height: 28rpx;
      color: #fff;
      margin: 2rpx 0 0 20rpx;
      padding-left: 20rpx;
      border-left: 1rpx solid #fff;
      font-size: 26rpx;
    }
  }

  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10rpx 0 26rpx;
    height: 64rpx;
    margin: 16rpx 20rpx;
    color: #fff;
    font-size: 28rpx;
    border-radius: 32rpx;
    background-color: rgba(255, 255, 255, 0.5);
  }

  .icon-search {
    &::before {
      margin-right: 10rpx;
    }
  }

  .icon-scan {
    font-size: 30rpx;
    padding: 15rpx;
  }
}
</style>