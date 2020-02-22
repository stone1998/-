import vuerouter from "vue-router"
import submit from "./submit.vue"
import index from "./index.vue"
const router = new vuerouter({
        routes: [{
                path: "/",
                component: index
            },
            {
                path: "/submit",
                component: submit
            }, {
                path: "/index",
                component: index
            }
        ]
    })
    // 以下就是路由守卫   to代表的是到哪里去的的   from是从哪里来的
router.beforeEach((to, from, next) => {
    if (to.path === "/submit")
        return next()
    if (window.sessionStorage.getItem("wode"))
        return next()
    next("/submit")
})
export default router