import axios from '~/axios'

export function login(data){
    return axios.post("/user/login",data)
}

export function getinfo(){
    return axios.get("/user/getCurrentUserInfo")
}

export function register(data){
    return axios.post("/user/register",data)
}

export function getRank(){
    return axios.get("/article/list")
}