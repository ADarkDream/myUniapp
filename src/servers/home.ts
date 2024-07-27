import { http_my, http_heima } from "@/utils/http";



//首页轮播图
export const getHomeBannerAPI = (data: ImgParams) => {
    return http_my<ReverseImg[]>({
        method: 'GET',
        // url: 'http://127.0.0.1:9000/getWallpaper',
        url: 'https://muxidream.cn/api/getWallpaper',
        data
    })
}

//获取的数据
export const getCategoryAPI = () => {
    return http_heima<CategoryItem[]>({
        method: 'GET',
        url: '/home/category/mutli'
    })
}

//获取的数据
export const getHotPanelAPI = () => {
    return http_heima<HotItem[]>({
        method: 'GET',
        url: '/home/hot/mutli'
    })
}

//获取猜你喜欢的数据
export const getGuessAPI = (data?: guessParams) => {
    return http_heima<PageResult<Guessitem>>({
        method: 'GET',
        url: '/home/goods/guessLike',
        data
    })
}