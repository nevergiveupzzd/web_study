// Vue2 new Vue() 创建一个应用实例
// Vue3 createApp()
// createRouter()、createStore()
// 将创建实例进行了封装，保证每个实例的独立封闭性
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// 导入持久化的插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia() // 创建Pinia实例
const app = createApp(App)  // 创建根实例

app.use(pinia.use(piniaPluginPersistedstate)) // pinia插件的安装配置

// mount 设置挂载点 #app (id为app的盒子)
app.mount('#app') // 视图挂载

// createApp(App).use(pinia).mount('#app')