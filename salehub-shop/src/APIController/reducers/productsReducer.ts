import { ProductsActions } from "../action-types"
import { Actions } from '../actions'
import { Product } from '../interfaces'

interface InitData {
    products:Product[]
    product:Object
}

const initData:InitData = {
    products: [],
    product: {}
}

export default (state = initData, action:Actions) => {
    switch (action.type) {
        case ProductsActions.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case ProductsActions.GET_PRODUCT:
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