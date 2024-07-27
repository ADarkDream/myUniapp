//配置请求拦截器

import { useMemberStore } from '@/stores';

// const baseURL = 'http://127.0.0.1:9000'
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

//请求拦截器
const httpInterceptor = {
    //拦截前触发
    invoke(options: UniApp.RequestOptions) {
        if (!options.url.startsWith('http')) {//如果请求连接开头不是http
            options.url = baseURL + options.url //则加上baseURL
        }
        //请求超时,默认60s
        options.timeout = 10000//单位是ms


        //小程序请求头
        options.header = {
            ...options.header,//加入原本写的其他请求头，否则会直接覆盖掉
            "source-client": "miniapp",
        }
        const memberStore = useMemberStore()
        const token = memberStore.profile?.token
        if (!!token) options.header.Authorization = token
        // console.log(options);//查看本次请求具体信息
    }
}
//请求和文件上传应用到拦截器
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadfile', httpInterceptor)

//定义后端返回的数据类型
export interface Data<T> {
    data: {
        status: number,//我的状态码
        msg: string,
        data: T     //泛型 //我的接口数据
    }
}

interface Data_heima<T> {
    code: string,//黑马的状态码
    msg: string,
    result: T//黑马的数据

}

//封装请求成功的Promise
//我的接口
export const http_my = <T>(options: UniApp.RequestOptions) => {
    return new Promise<Data<T>>((resolve, reject) => {
        uni.request({
            ...options,
            success(res) {
                const data = (res.data as Data<T>).data
                if (data.status >= 200 && data.status < 300)
                    resolve(res.data as Data<T>)
                else if (data.status === 401) {//token失效
                    uni.showToast({
                        icon: 'none',
                        title: data.msg
                    })
                    setTimeout(() => {
                        uni.navigateTo({ url: '/pages/login/login' })//跳转到首页 
                    }, 1500)
                    reject(res)
                }
                else if (!!data.status && !!data.msg) {//其他错误，如果有状态码和信息则显示
                    uni.showToast({
                        icon: 'none',
                        title: data.msg
                    })
                    reject(res)
                }
                else {//其他错误码
                    uni.showToast({
                        icon: 'none',
                        title: '未知错误'
                    })
                    reject(res)
                }

            },
            fail(err) {//响应失败
                uni.showToast({
                    icon: 'none',
                    title: '当前网络不佳，请稍后重试'
                })
                reject(err)
            }
        })
    })
}

//黑马的接口
export const http_heima = <T>(options: UniApp.RequestOptions) => {
    return new Promise<Data_heima<T>>((resolve, reject) => {
        uni.request({
            ...options,
            success(res) {
                console.log('res', res);
                const data = (res.data as Data_heima<T>)
                if (data.code === '1')
                    resolve(res.data as Data_heima<T>)
                else if (data.code === '401') {//token失效
                    uni.showToast({
                        icon: 'none',
                        title: data.msg
                    })
                    setTimeout(() => {
                        uni.navigateTo({ url: '/pages/login/login' })//跳转到首页 
                    }, 1500)
                    reject(res)
                }
                else if (!!data.code && !!data.msg) {//其他错误，如果有状态码和信息则显示
                    uni.showToast({
                        icon: 'none',
                        title: data.msg
                    })
                    reject(res)
                }
                else {//其他错误码
                    uni.showToast({
                        icon: 'none',
                        title: '未知错误'
                    })
                    reject(res)
                }
            },
            fail(err) {//响应失败
                uni.showToast({
                    icon: 'none',
                    title: '当前网络不佳，请稍后重试'
                })
                reject(err)
            }
        })
    })
}