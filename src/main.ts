import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import vuex from './store/index'


const  app = createApp(App)

// app.config.globalProperties.$$refs = {}

// // if (import.meta.env.DEV) {
// window.$$refs = app.config.globalProperties.$$refs
// }
app.use(router).use(vuex)
// 路由准备完毕再挂载
router.isReady().then(() => app.mount('#app'))
