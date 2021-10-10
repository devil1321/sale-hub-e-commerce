import axios from 'axios'
import { ProductActions } from '../action-types'
import { Dispatch } from 'redux'
import { Action } from '../actions/productActions'
import {Product as ProductModel} from '../interfaces'
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
    axios.get(`https://fakestoreapi.com/products/`+ id)
    .then(res => {
        let item:any = res.data
        
        let product:ProductModel = {
            id:item.id,
            title:item.title,
            price:item.price,
            description:item.description,
            category:item.category,
            image:item.image,
            quantity:1,
            total:item.price,
            rating:{
                rate:item.rating.rate,
                count:item.rating.count
            }
        }
        dispatch({
            type: ProductActions.GET_PRODUCT,
            payload: product
        })
    })
}
const getCategory = (category:string) =>(dispatch:Dispatch<Action>) =>{
    axios.get(`https://fakestoreapi.com/products/category/`+ category)
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
                    rating:{
                        rate:item.rating.rate,
                        count:item.rating.count
                    }
                }
                tempProducts.push(product)
            dispatch({
                type: ProductActions.GET_CATEGORY,
                payload: tempProducts
            })
        })
    })
}


const resetProducts = () => (dispatch:Dispatch<Action>):void =>{
    dispatch({
        type:ProductActions.RESET_PRODUCTS,
        payload:[]
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