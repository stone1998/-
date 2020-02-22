import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import "./assets/font/iconfont.css"
import vuerouter from "vue-router"
import router from "./components/router"
import axios from "axios"
Vue.prototype.$axios = axios
Vue.use(vuerouter)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')