<template>
  <view class="content">
    <!--顶部自定义标题 -->
    <CustomNavBar />

    <!-- 主要界面，滚动容器,scrolltolower是滚动触底事件,需要有容器高度，否则无法触发事件 -->
    <scroll-view @scrolltolower="onScrolltolower" refresher-enabled @refresherrefresh="refresh"
      :refresher-triggered="isRefresh" :style="scrollStyle" scroll-y>
      <!-- 主界面骨架屏 -->
      <Skeleton v-if="isLoading" />
      <template v-else>
        <!-- 主界面 -->

      </template>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomNavBar from '@/pages/index/components/customNavBar.vue'
import Skeleton from '@/pages/index/components/skeleton.vue'
import { onLoad } from '@dcloudio/uni-app';



const isLoading = ref(true) //是否在加载状态
const scrollStyle = ref('') //滚动窗口的样式(调高度)
const isRefresh = ref(false)


//获取移动端屏幕高度
const getScreenHeight = async () => {
  //获取移动端屏幕信息
  const getSystemInfo = () => {
    return new Promise((resolve, reject) => {
      uni.getSystemInfo({
        success: (res) => resolve(res),
        fail: (err) => reject(err)
      })
    })
  }
  //获取屏幕高度并修改滚动窗口高度的样式
  const res = <SystemInfo>await getSystemInfo();
  scrollStyle.value = 'height:' + (res.windowHeight - 94) + 'px' //94是自定义导航栏的高度
}



//加载时调用
onLoad(async () => {
  isLoading.value = true//开启骨架屏
  await Promise.all([//Promise.all内部的异步全部结束了才执行下一步，内部的异步函数可以并行加载，用数组存放函数
    getScreenHeight(),//获取移动端屏幕高度

  ])
  isLoading.value = false//关闭骨架屏
})

//滚动触底
const onScrolltolower = () => {
  console.log('本页已加载完毕')
  //调用函数,获取下一页数据
}

//下拉刷新
const refresh = async () => {
  isRefresh.value = true
  //要执行的函数
  isRefresh.value = false//关闭下拉刷新
}
</script>

<style></style>
