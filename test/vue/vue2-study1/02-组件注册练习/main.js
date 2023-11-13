// 文件核心作用：导入 App.vue，基于 App.vue 创建结构渲染 index.html
// 1. 导入 Vue 核心包
import Vue from 'vue'
// 2. 导入 App.vue 根组件
import App from './App.vue'
// 编写导入的代码，前往代码的顶部编写(规范)
import HmButton from './components/HmButton.vue'
// 提示：当前处于什么环境（生产环境 / 开发环境）
Vue.config.productionTip = false

// 进行全局注册 —> 在所有的组件范围内都能直接使用
// Vue.component('组件名'，组件对象)
Vue.component('HmButton',HmButton)

// 3. Vue实例化，提供 render 方法 —> 基于 App.vue 创建结构渲染 index.html
new Vue({

  render: h => h(App),

}).$mount('#app')

// new Vue({
//   el: '#app',  //作用：和 $mount('选择器')作用一致，用于指定 Vue 所管理的容器
//   render: (createElement)=>{
//     // 基于 App 创建元素结构
//     return createElement(App)
//   }
// })