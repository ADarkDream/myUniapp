// 配合pages.json中的easycom，给@/components下自动引入的组件添加类型声明
import type XtxGeuss from '@/components/XtxGeuss.vue'
import type CustomNavBar from '@/pages/index/components/customNavBar.vue'
import XtxSwiper from '@components/XtxSwiper.vue'


declare module 'vue' {
    export interface GlobalComponents {
        XtxSwiper: typeof XtxSwiper
    }
}

//给猜你喜欢组件声明类型
export type XtxGeussInstance = InstanceType<typeof XtxGeuss>