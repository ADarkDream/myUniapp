//数据库返回的数据类型
type ReverseImg = {
    imgIndex: number,
    imgName: string,
    imgUrl: string,
    time: string,
    version: string
}

//图片查询的参数
interface ImgParams {
    version?: string[],
    roles?: string[],
    sort?: Sort,
    accurate?: Accurate
}

//图片分类
enum Sort {
    Tall = 0,//竖屏图
    Wide = 1,//横屏图
    All = 2//全选
}

//是否精确查询
enum Accurate {
    NotAccurate = 0,//模糊查询
    IsAccurate = 1//精确查询
}

/** 首页-前台类目数据类型 */
type CategoryItem = {
    /** 图标路径 */
    icon: string
    /** id */
    id: string
    /** 分类名称 */
    name: string
}

/** 首页-热门推荐数据类型 */
type HotItem = {
    /** 说明 */
    alt: string
    /** id */
    id: string
    /** 图片集合[ 图片路径 ] */
    pictures: string[]
    /** 跳转地址 */
    target: string
    /** 标题 */
    title: string
    /** 推荐类型 */
    type: string
}


//猜你喜欢的查询参数
interface guessParams {
    page?: number,//分页的页码
    pageSize?: number//每页数据的条数
}

/**通用分页结果类型*/
type PageResult<T> = {
    items: T[],//列表数据
    counts: number,//总条数
    page: number,//当前页数
    pages: number,//总页数
    pagesize: number//每页条数
}

//猜你喜欢商品
type Guessitem = {
    desc: string,//商品描述
    discount: number,//商品折扣
    id: string,
    name: string,// 商品名称
    orderNum: number,// 商品已下单数量
    picture: string,//商品图片
    price: number//商品价格
}

interface SystemInfo {
    screenWidth: number;//屏幕宽度
    screenHeight: number;//屏幕高度
    windowWidth: number;//窗口可用宽度
    windowHeight: number;//窗口可用高度
    safeArea?: {//安全距离，指距离(刘海屏或状态栏等)边距多远
        left: number;
        right: number;
        top: number;
        bottom: number;
        width: number;
        height: number;
    }
}