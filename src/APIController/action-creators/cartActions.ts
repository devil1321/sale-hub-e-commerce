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

const removeFromCart = (e:any,id:number) => (dispatch:Dispatch<Action>) =>{
    e.preventDefault()
    let tempCart:ProductModel[] = store.getState().cart.cart
    tempCart = tempCart.filter(item => item.id !== id)
    dispatch({
        type:CartActions.REMOVE_FROM_CART,
        payload:tempCart
    })
}
const increaseCartProduct = (e:any,id:number) => (dispatch:Dispatch<Action>) =>{
    e.preventDefault()
    let tempCart:ProductModel[] = store.getState().cart.cart
    let product:any = tempCart.find(item => item.id === id)
    let index = tempCart.indexOf(product)
    tempCart[index].quantity += 1
    dispatch({
        type:CartActions.INCREASE_PRODUCT,
        payload:tempCart
    })
}
const decreaseCartProduct = (e:any,id:number) => (dispatch:Dispatch<Action>) =>{
    e.preventDefault()
    let tempCart:ProductModel[] = store.getState().cart.cart
    let product:any = tempCart.find(item => item.id === id)
    let index = tempCart.indexOf(product)
    tempCart[index].quantity -= 1
    dispatch({
        type:CartActions.DECREASE_PRODUCT,
        payload:tempCart
    })
}

const clearCart = (e:any) => (dispatch:Dispatch<Action>) =>{
    e.preventDefault()
    dispatch({
        type:CartActions.CLEAR_CART,
        payload:[],
        cart:[]
    })
}

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
    increaseCartProduct,
    decreaseCartProduct,
    clearCart,
    setTotal
}  