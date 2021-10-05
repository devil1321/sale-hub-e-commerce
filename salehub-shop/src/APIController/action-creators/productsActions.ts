import axios from 'axios'
import { ProductsActions } from '../action-types'
import { Dispatch } from 'redux'
import { Actions } from '../actions'

const getProducts = () => (dispatch:Dispatch<Actions>) => {
    axios.get(`https://fakestoreapi.com/products`)
        .then(res => {
            dispatch({
                type: ProductsActions.GET_PRODUCTS,
                payload: res.data
            })
        })
}

const getProduct = (id:number) =>(dispatch:Dispatch<Actions>) =>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res => {
        dispatch({
            type: ProductsActions.GET_PRODUCT,
            payload: res.data
        })
    })
}

export const productsActions = {
    getProducts,
    getProduct
}