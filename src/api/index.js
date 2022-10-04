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

export function getRank(param){
    return axios.get("/common/getRank",{type:param})
}

export function getCarousel(){
    return axios.get("/common/getCarousel")
}

export function getNewPapers(){
    return axios.get("/common/getNewPapers")
}
