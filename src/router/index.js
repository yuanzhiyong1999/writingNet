import {createRouter, createWebHashHistory} from 'vue-router'
import {getToken} from "../composables/auth"
import {toast} from "../composables/util.js";
import Index from '~/pages/index.vue'
import NotFound from '~/pages/404.vue'
import Test from '~/pages/test.vue'
import store from "../store/index.js";
import Ticai from '~/pages/ticai.vue'


const routes = [{
    path: "/",
    component: Index
}, {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
}, {
    path: '/test',
    name: '测试',
    component: Test
}, {
    path: '/ticai',
    name: '体裁',
    component: Ticai
}]

const router = createRouter({
    history: createWebHashHistory(), routes
})


// router.beforeEach(async (to, from, next) => {
//     const token = getToken()
//
//     //没有登录，强制跳转登录
//     if (!token && to.path !== "/") {
//         toast("请先登录", "error")
//         return next({path: "/"})
//     }
//
//     //防止重复登录
//     if (token && to.path === "/") {
//         toast("请勿重复登录", "error")
//         return next({path: from.path ? from.path : "/"})
//     }
//
//     //如果用户登录了 自动获取用户信息 并存储在vuex
//     if (token){
//        await store.dispatch("getinfo")
//     }
//
//     next()
// })


export default router