import { title } from "process"
import { ProductActions } from "../action-types"
import { Action } from '../actions/productActions'
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
        quantity:1,
        size:'S',
        color:'Black',
        total:0,
        inCart:false,
        rating:{
            rate:0,
            count:0
        }
    }
}

export default (state = initData, action:Action) => {
    switch (action.type) {
        case ProductActions.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case ProductActions.GET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case ProductActions.GET_CATEGORY:
            return {
                ...state,
                products: action.payload
            }
         
        case ProductActions.RESET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
     
        case ProductActions.RESET_PRODUCT:
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