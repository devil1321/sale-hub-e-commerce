import axios from 'axios'
import { GET_PRODUCTS, GET_PRODUCT } from '../types'

const getProducts = (category) => dispatch => {
    axios.get(`https://fakestoreapi.com/products`)
        .then(res => {
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            })
        })
}


export const productsActions = {
    getProducts
}