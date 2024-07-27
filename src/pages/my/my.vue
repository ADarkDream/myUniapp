<template>
  <view>
    <view class="my">我的界面</view>


  </view>
</template>

<script lang="ts" setup>
import { useMemberStore } from '@/stores';
import { http_my } from '@/utils/http';

const memberStore = useMemberStore()


//请求到数据
const getData2 = async () => {
  const result = await http_my({
    method: 'GET',
    url: 'https://muxidream.cn/api/getWallpaper',
  })
  console.log('请求成功', result.data);
}

</script>

<style scoped></style>