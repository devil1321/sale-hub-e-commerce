import { title } from "process"
import { ProductsActions } from "../action-types"
import { Actions } from '../actions'
import { Product } from '../interfaces'



type InitData = {
    products:Product[]
    product:Product
}

const initData:InitData = {
    products: [],
    product:{
        id:0,
        title:'',
        price:0,
        description:'',
        category:'',
        image:'',
        rating:{
            rate:0,
            count:0
        }
    }
}

export default (state = initData, action:Actions) => {
    switch (action.type) {
        case ProductsActions.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case ProductsActions.GET_PRODUCTS:
            return {
                ...state,
                product: action.payload
            }
         
        case ProductsActions.GET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
     
        case ProductsActions.RESET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        default:
            return {
                ...state
            }
    }
}