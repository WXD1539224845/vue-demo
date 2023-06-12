import { post, get } from "../index"

const BASE_URL = 'sms-home-advertise/'
//添加
const add = (data) => {
    return post(BASE_URL + 'add', data)
}
//编辑
const edit = (data) => {
    return post(BASE_URL + 'edit', data)
}
//获取单个
const one = (params) => {
    return get(BASE_URL + 'one/' + params.id)
}
//分页查询
const page = (data) => {
    return post(BASE_URL + 'page',data)
}
//删除
const del = (params) => {
    return get(BASE_URL + 'del/' + params.id)
}


export {
    edit,  
    add,
    one,
    page,
    del,
}