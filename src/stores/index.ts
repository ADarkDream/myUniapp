import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

    //创建pinia实例
const pinia = createPinia()
    //使用持久化存储插件
pinia.use(piniaPluginPersistedstate)
  
export default pinia

//模块统一导出(在这个目录下的module文件夹的member.ts)
export * from './modules/member'