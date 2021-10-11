import axios from 'axios'
import { ProductActions } from '../action-types'
import { Dispatch } from 'redux'
import { Action } from '../actions/productActions'
import {Product as ProductModel} from '../interfaces'
import store from '../store'
const getProducts = () => (dispatch:Dispatch<Action>):void => {
    axios.get(`https://fakestoreapi.com/products`)
        .then(res => {
            let tempProducts:ProductModel[] = []
            let response:any[] = res.data
            response.map(item =>{
                let product:ProductModel = {
                    id:item.id,
                    title:item.title,
                    price:item.price,
                    description:item.description,
                    category:item.category,
                    image:item.image,
                    quantity:1,
                    total:item.price,
                    color:"Black",
                    size:"S",
                    inCart:false,
                    rating:{
                        rate:item.rating.rate,
                        count:item.rating.count
                    }
                }
                tempProducts.push(product)
            })
            dispatch({
                type: ProductActions.GET_PRODUCTS,
                payload:[...tempProducts]
            })
        })
}

const getProduct = (id:number) =>(dispatch:Dispatch<Action>):void =>{
    const products = store.getState().products.products
    let product = products.filter(item => item.id === id)

    dispatch({
        type: ProductActions.GET_PRODUCT,
        payload: product[0]
    })
}



const resetProducts = () => (dispatch:Dispatch<Action>):void =>{
    let products:ProductModel[] = store.getState().products.products
    let tempProducts = [...products]
    tempProducts.forEach(product =>{
        product.inCart = false
        product.quantity = 0
    })
    dispatch({
        type:ProductActions.RESET_PRODUCTS,
        payload:tempProducts
    })
}
const resetProduct = () => (dispatch:Dispatch<Action>):void =>{
    let product:ProductModel = {
        id:0,
        title:'',
        price:0,
        description:'',
        category:'',
        image:'',
        quantity:1,
        total:0,
        size:'S',
        color:'Black',
        inCart:false,
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
    resetProducts,
    resetProduct,
}