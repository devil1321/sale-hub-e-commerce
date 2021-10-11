import React,{useState, useEffect} from 'react'
import { Product as ProductModel }  from '../../APIController/interfaces'
import { useSelector,useDispatch } from 'react-redux'
import { productsActionsCreators } from '../../APIController/action-creators/productsActions'
import {bindActionCreators} from 'redux'
import CarouselElectronics from '../../components/CarouselElectronics'
import { State } from '../../APIController/reducers'
import Product from '../../components/Product'
import Feature from '../../components/Feature'
const Electronics = () => {
    const dispatch = useDispatch()
    const {getProducts} = bindActionCreators(productsActionsCreators,dispatch)
    let { products }:{ products:ProductModel[] } = useSelector((state:State) => state.products)
    products = products.filter(product => product.category === 'electronics')
    const [slides,setSlides] = useState<string[]>([
        'technology-1.jpg',
        'technology-2.jpg',
        'technology-3.jpg'
    ])

    useEffect(()=>{
        if(products.length === 0){
            getProducts()        
        }
    },[])
    return (
        <div className="electronics">
            <CarouselElectronics slides ={slides} />
            <div className="electronics__content">
                <Feature images={products.slice(0,3)}/>
                <h2 className="title-clothes">Explore Our Shop</h2>
                <div className="container-inner">
                    {products.map((product:ProductModel,index:number) => <Product key={index} product={product} />)}
                </div>
            </div>
        </div>
    )
}

export default Electronics
