import { GET_PRODUCTS, GET_PRODUCT } from '../types'

const initData = {
    products: [],
    product: {}
}

export default (state = initData, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case GET_PRODUCT:
            return {
                ...state,
                products: action.payload
            }
        default:
            return {
                ...state
            }
    }
}