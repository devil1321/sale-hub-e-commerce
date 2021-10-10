import { CartActions } from '../action-types'
import { Action } from '../actions/cartActions'
import { Dispatch } from 'redux'
import { Product as ProductModel } from '../interfaces'
import store from '../store'

const addToCart = (e:any,product:ProductModel,quantity:number) => (dispatch:Dispatch<Action>) =>{
    e.preventDefault()
    let tempCart = store.getState().cart.cart
    let tempNewCart:ProductModel[] = []
    let tempProduct:ProductModel = product
    tempProduct.quantity = quantity
    tempProduct.total = quantity * product.price
    tempNewCart = [...tempCart,tempProduct]
    dispatch({
        type:CartActions.ADD_TO_CART,
        payload:tempNewCart
    })
}

const removeFromCart = () => (dispatch:Dispatch<Action>) =>{}
const increaseCart = () => (dispatch:Dispatch<Action>) =>{}
const decreaseCart = () => (dispatch:Dispatch<Action>) =>{}
const clearCart = () => (dispatch:Dispatch<Action>) =>{}

const setTotal = (cart:ProductModel[]) => (dispatch:Dispatch<Action>) =>{
    let total = 0
    cart.forEach(item =>{
        total += item.total
    })
    dispatch({
        type:CartActions.SET_TOTAL,
        payload:total
    })
}

export const cartActionsCreators = {
    addToCart,
    removeFromCart,
    increaseCart,
    decreaseCart,
    clearCart,
    setTotal
}  