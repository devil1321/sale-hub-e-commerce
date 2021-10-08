import { Product } from '../interfaces'
import { CartActions } from '../action-types'
import { Action } from '../actions/cartActions'

type CartData = {
    cart:Product[]
}

const initData:CartData = {
    cart:[]
}


export default (state = initData, action:Action) => {
    switch(action.type){
        case CartActions.ADD_TO_CART:
            return{
                ...state,
                cart:action.payload
            }
        case CartActions.REMOVE_FROM_CART:
            return {
                ...state,
                cart:action.payload
            }
        case CartActions.INCREASE_PRODUCT:
            return {
                ...state,
                cart:action.payload
            }
        case CartActions.DECREASE_PRODUCT:
            return {
                ...state,
                cart:action.payload
            }
        case CartActions.CLEAR_CART:
            return {
                ...state,
                cart:[]
            }
    }
}