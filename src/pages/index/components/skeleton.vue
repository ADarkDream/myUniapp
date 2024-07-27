<template name="skeleton">
  <view is="components/XtxSwiper">
    <view class="carousel XtxSwiper--carousel">
      <swiper circular="true" indicator-dots="true" interval="3000" autoplay="false" current="0">
        <swiper-item
          style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
          <navigator class="navigator XtxSwiper--navigator" hover-class="none">
            <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
          </navigator>
        </swiper-item>
      </swiper>
      <view class="indicator XtxSwiper--indicator">
        <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot"></text>
      </view>
    </view>
  </view>
  <button hover-class="button-hover" class="sk-transparent sk-button sk-pseudo sk-pseudo-circle"> 更换轮播图 </button>
  <view is="components/XtxGeuss" class="r r">
    <view class="caption XtxGeuss--caption">
      <text class="text XtxGeuss--text sk-transparent sk-text-0-0000-473 sk-text sk-pseudo sk-pseudo-circle">猜你喜欢</text>
    </view>
    <view class="guess XtxGeuss--guess">
      <navigator class="guess-item XtxGeuss--guess-item">
        <image class="image XtxGeuss--image sk-image" mode="aspectFill"></image>
        <view class="name XtxGeuss--name sk-transparent sk-text-14-2857-609 sk-text">三分钟即享简餐，日式即食咖喱150克</view>
        <view class="price XtxGeuss--price">
          <text class="small XtxGeuss--small sk-transparent sk-opacity">¥</text>
          <text class="sk-transparent sk-text-0-0000-845 sk-text">15.00</text>
        </view>
      </navigator>
      <navigator class="guess-item XtxGeuss--guess-item">
        <image class="image XtxGeuss--image sk-image" mode="aspectFill"></image>
        <view class="name XtxGeuss--name sk-transparent sk-text-14-2857-506 sk-text">办公居家必备，3A3U智能插线板</view>
        <view class="price XtxGeuss--price">
          <text class="small XtxGeuss--small sk-transparent sk-opacity">¥</text>
          <text class="sk-transparent sk-text-0-0000-319 sk-text">59.00</text>
        </view>
      </navigator>
      <navigator class="guess-item XtxGeuss--guess-item"></navigator>
      <navigator class="guess-item XtxGeuss--guess-item"></navigator>
    </view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}

.sk-text-0-0000-545 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 25.7813rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-976 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-0-0000-473 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 30.4688rpx;
  position: relative !important;
}

.sk-text-14-2857-609 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-opacity {
  opacity: 0 !important;
}

.sk-text-0-0000-845 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 25.7813rpx;
  position: relative !important;
}

.sk-text-14-2857-506 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-0-0000-319 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 25.7813rpx;
  position: relative !important;
}

.sk-button {
  color: #EFEFEF !important;
  background: #EFEFEF !important;
  border: none !important;
  box-shadow: none !important;
}

.sk-image {
  background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #EFEFEF !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>