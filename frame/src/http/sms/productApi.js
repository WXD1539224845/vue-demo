import { post, get } from "./index"

let page = {
    current: 1,
    size: 1000
}

const allProduct = () => {
    return post('pms-product/page', page)
}


export {
    allProduct
}