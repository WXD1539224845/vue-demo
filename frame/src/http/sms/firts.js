import { post, get } from "./index"

let page = {
    current: 1,
    size: 300
}

const allRecommendProduct = () => {
    return post('sms-home-recommend-product/page', page)
}

const allNewProduct = () => {
    return post('sms-home-new-product/page', page)
}

const allAdvertise = () => {
    return post('sms-home-advertise/page', page)
}

const allProduct = () => {
    return post('pms-product/page', page)
}

const allSub = () =>{
    return post('sms-home-recommend-subject/page',page)
}

//获取所有品牌
const allBrand = () => {
    let pageDto = {
        current: 1,
        size: 100
    }
    return post('pms-brand/page', pageDto)
}

export {
    allProduct,
    allAdvertise,
    allRecommendProduct,
    allNewProduct,
    allBrand,
    allSub
}