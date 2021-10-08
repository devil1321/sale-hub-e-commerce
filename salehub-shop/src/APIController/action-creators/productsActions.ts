import axios from 'axios'
import { ProductActions } from '../action-types'
import { Dispatch } from 'redux'
import { Actions } from '../actions/productActions'

const getProducts = () => (dispatch:Dispatch<Actions>):void => {
    axios.get(`https://fakestoreapi.com/products`)
        .then(res => {
            dispatch({
                type: ProductActions.GET_PRODUCTS,
                payload: res.data
            })
        })
}

const getProduct = (id:number) =>(dispatch:Dispatch<Actions>):void =>{
    axios.get(`https://fakestoreapi.com/products/`+ id)
    .then(res => {
        dispatch({
            type: ProductActions.GET_PRODUCT,
            payload: res.data
        })
    })
}
const getCategory = (category:string) =>(dispatch:Dispatch<Actions>) =>{
    axios.get(`https://fakestoreapi.com/products/category`+ category)
    .then(res => {
        dispatch({
            type: ProductActions.GET_CATEGORY,
            payload: res.data
        })
    })
}

const resetProducts = () => (dispatch:Dispatch<Actions>):void =>{
    dispatch({
        type:ProductActions.RESET_PRODUCTS,
        payload:[]
    })
}
const resetProduct = () => (dispatch:Dispatch<Actions>):void =>{
    let product = {
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

    dispatch({
        type:ProductActions.RESET_PRODUCT,
        payload:product
    })
}

export const productsActionsCreators = {
    getProducts,
    getProduct,
    getCategory,
    resetProducts,
    resetProduct
}