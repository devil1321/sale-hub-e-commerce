import React ,{useState,useEffect} from 'react'
import { Product as ProductModel }  from '../../APIController/interfaces'
import { useSelector,useDispatch } from 'react-redux'
import { productsActionsCreators } from '../../APIController/action-creators/productsActions'
import {bindActionCreators} from 'redux'
import CarouselClothes from '../../components/CarouselClothes'
import { State } from '../../APIController/reducers'
import Product from '../../components/Product'
import Feature from '../../components/Feature'
const Jewelery = () => {
    const dispatch = useDispatch()
    const {getProducts} = bindActionCreators(productsActionsCreators,dispatch)
    let { products }:{ products:ProductModel[] } = useSelector((state:State) => state.products)
    products = products.filter(product => product.category === 'jewelery')
    const [slides,setSlides] = useState<string[]>([
        'jewelery-1.jpg',
        'jewelery-2.jpg',
        'jewelery-3.jpg'
    ])
    useEffect(()=>{
        if(products.length === 0){
            getProducts()        
        }
    },[])
    return (
        <div className="jewelery">
            <CarouselClothes slides={slides}/>
            <div className="jewelery__content">
                <Feature images={products.slice(0,3)} fromRight/>
                <h2 className="title-clothes">Explore Our Shop</h2>
                <div className="container-inner">
                    {products.map((product:ProductModel,index:number) => <Product key={index} product={product} />)}
                </div>

            </div>
        </div>
    )
}

export default Jewelery
