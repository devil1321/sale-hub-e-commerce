import React,{ useState,useEffect } from 'react'
import { productsActionsCreators } from '../APIController/action-creators/productsActions'
import { Product as ProductModel }  from '../APIController/interfaces'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import Product from '../components/Product'
import CarouselClothes from '../components/CarouselClothes'
import { State } from '../APIController/reducers'
const All:React.FC = () => {

    const products:any  = useSelector((state:State) => state.products)
    const productsArr = products.products
    const dispatch = useDispatch()
    const { getProducts } = bindActionCreators(productsActionsCreators,dispatch)
    const [slides,setSlides] = useState<string[]>([
        'slideshow-1.jpg',
        'slideshow-2.jpg',
        'slideshow-3.jpg'
    ])
    useEffect(()=>{
        window.scrollTo(0,0)
        getProducts()        
    },[])

    return (
        <div className="all">
            <CarouselClothes slides = {slides}/>
            <div className="all__products">
                {productsArr.map((product:ProductModel,index:number) => <Product key={index} {...product} />)}
            </div>
        </div>
    )
}



export default All
