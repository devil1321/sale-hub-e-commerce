import React,{ useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { productsActions } from '../APIController/actions/productsActions'
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
    const strignify = JSON.stringify(products)
    useEffect(()=>{
        getProducts()        
    },[])

    return (
        <div className="home">
            {strignify}
        </div>
    )
}

const mapStateToProps = (state:any) => ({
    ...state
})

export default connect(mapStateToProps,productsActions)(Homepage)
