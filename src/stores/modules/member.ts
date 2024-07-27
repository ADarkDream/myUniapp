// pinia持久化配置
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useMemberStore = defineStore(
  'member',
  () => {
    //  .user
    const user = ref()

    const profile = reactive({
      nickname: '张三',
      token: ''
    })

    //方法一  .addName
    const addName = (val: any) => {
      user.value = val
      profile.nickname = val
      profile.token = 'token123'
    }
    //方法二  .clearName
    const clearName = () => {
      user.value = undefined
      profile.nickname = ''
      profile.token = ''
    }

    //方法三   get
    const getInfo = () => {
      uni.request({
        method: 'GET',
        url: '/getWallpaper',
        header: {}
      })
    }


    //导出
    return { user, profile, addName, clearName, getInfo }
  },
  {
    // 配置持久化
    persist: {
      // 调整为兼容多端的API
      storage: {
        setItem(key, value) {
          uni.setStorageSync(key, value) // 将数据存到localStorage
        },
        getItem(key) {
          return uni.getStorageSync(key) // 从localStorage中读取数据
        },
      },
    },
  },
)