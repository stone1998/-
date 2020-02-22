import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import "./assets/font/iconfont.css"
import vuerouter from "vue-router"
import router from "./components/router"
import axios from "axios"
axios.interceptors.request.use(config => {
    config.headers.authot = "user"
    console.log(config)
    return config
})
Vue.prototype.$axios = axios
Vue.use(vuerouter)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
    mounted() {
        this.$axios.get("127.0.0.1").catch(() => console.log("????"))
    },
}).$mount('#app')