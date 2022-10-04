import {createRouter, createWebHashHistory} from 'vue-router'
import {getToken} from "../composables/auth"
import {toast} from "../composables/util.js";
import store from "../store/index.js";



const routes = [
    {
        path: '/',
        component: () => import('../pages/index.vue'),
        meta:{
            showOther: true,
            title:'首页'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/login.vue'),
        meta:{
            showOther: false,
            title:'登录'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../pages/register.vue'),
        meta:{
            showOther: false,
            title:'注册'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../pages/404.vue'),
        meta:{
            showOther: false,
            title:'404'
        }
    },
    {
        path: '/ticai',
        name: 'ticai',
        component: () => import('../pages/ticai.vue'),
        meta:{
            showOther: true,
            title:'体裁作文'
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(), routes
})


router.beforeEach(async (to, from, next) => {
    document.title = to.meta.title ? to.meta.title : '首页';
    const token = getToken()

    //没有登录，强制跳转登录
    // if (!token && to.path !== "/") {
    //     toast("请先登录", "error")
    //     return next({path: "/"})
    // }

    // 防止重复登录
    // if (token && to.path === "/login") {
    //     toast("请勿重复登录", "error")
    //     return next({path: from.path ? from.path : "/"})
    // }

    // 如果用户登录了 自动获取用户信息 并存储在vuex
    // if (token){
    //    await store.dispatch("getinfo")
    // }

    next()
})


export default router