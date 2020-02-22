import vuerouter from "vue-router"
import submit from "./submit.vue"
export default new vuerouter({
    routes: [{
        path: "/submit",
        component: submit
    }]
})