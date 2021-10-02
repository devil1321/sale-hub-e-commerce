import React,{ useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { productsActions } from '../APIController/actions/productsActions'
import Product from '../components/Product'
import axios from 'axios'
import { useLocation } from 'react-router-dom' 

interface Electronics{
    products:{
        products:string[];
        product:Object;
    }
    getProducts:any;
} 

const Homepage:React.FC<Electronics> = (props) => {
    const { getProducts } = props
    const { product, products } = props.products

    useEffect(()=>{
        getProducts()        
    },[])

    return (
        <div className="home">
            <h2 className="home__title">Products</h2>
            <div className="home__products">
                {products.map((product,index) => <Product key={index} {...product} />)}
            </div>
        </div>
    )
}

const mapStateToProps = (state:any) => ({
    ...state
})

export default connect(mapStateToProps,productsActions)(Homepage)
