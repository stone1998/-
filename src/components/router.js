import vuerouter from "vue-router"
import submit from "./submit.vue"
import index from "./index.vue"
import hellow from "./hellow.vue"
import bar1 from "./bar1.vue"
import bar2 from "./bar2.vue"
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
                redirect: "/hellow",
                component: index,
                children: [{
                        path: "/hellow",
                        component: hellow
                    },
                    {
                        path: "/bar1",
                        component: bar1
                    },
                    {
                        path: "/bar2",
                        component: bar2
                    }
                ]
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