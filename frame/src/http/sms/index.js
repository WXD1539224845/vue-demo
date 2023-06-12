import instance from "../axios";
//用到的请求就两种 post请求 和 get请求，避免重复写，所以封装
//每一个请求路径的开头都是'mall/'，避免重复写，所以封装
const BASE_URL = "mall/"

const post=(url,data)=>{
    return instance.request({
        url:BASE_URL + url,
        method:'post',
        data
    })
}



const get=(url,params)=>{
    return instance.request({
        url:BASE_URL + url,
        params
    })
}

export {
    post,
    get
}