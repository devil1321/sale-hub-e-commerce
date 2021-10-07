import axios from 'axios'
import { ProductActions } from '../action-types'
import { Dispatch } from 'redux'
import { Actions } from '../actions/productActions'

const getProducts = () => (dispatch:Dispatch<Actions>) => {
    axios.get(`https://fakestoreapi.com/products`)
        .then(res => {
            dispatch({
                type: ProductActions.GET_PRODUCTS,
                payload: res.data
            })
        })
}

const getProduct = (id:number) =>(dispatch:Dispatch<Actions>) =>{
    axios.get(`https://fakestoreapi.com/products/`+ id)
    .then(res => {
        dispatch({
            type: ProductActions.GET_PRODUCT,
            payload: res.data
        })
    })
}

export const productsActionsCreators = {
    getProducts,
    getProduct
}