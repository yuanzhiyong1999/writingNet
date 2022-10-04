import { createStore } from 'vuex'
import {getinfo} from "../api/index.js";

// 创建一个新的 store 实例
const store = createStore({
    state () {
        return {
            user:{}
        }
    },
    mutations: {
        SET_USERINFO(state,user){
            state.user = user
        }
    },
    actions:{
        //获取当前登录用户信息
        getinfo({commit}){
            return new Promise((resolve, reject)=>{
                getinfo().then(res=>{
                    commit("SET_USERINFO",res.data)
                    resolve(res.data)
                }).catch(err=>reject(err))
            })
        }
    }
})

export default store