import React,{ useState,useEffect } from 'react'
import { Product as ProductModel }  from '../../APIController/interfaces'
import { productsActionsCreators } from '../../APIController/action-creators/productsActions'
import { useDispatch,useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import CarouselClothes from '../../components/CarouselClothes'
import { State } from '../../APIController/reducers'
import Product from '../../components/Product'
import ProductsInnerHero from '../../components/ProductsInnerHero'
const Electronics = () => {
    const dispatch = useDispatch()
    const { getCategory } = bindActionCreators(productsActionsCreators,dispatch)
    const products:any = useSelector((state:State) => state.products)
    const productsArr:ProductModel[] = products.products
    const [slides,setSlides] = useState<string[]>([
        'mens-1.jpg',
        'mens-2.jpg',
        'mens-3.jpg'
    ])
    useEffect(()=>{
        getCategory('men\'s clothing')
    },[])
    return (
        <div className="mens">
            <CarouselClothes slides={slides} fix />
            <div className="mens__content">
                <ProductsInnerHero products={productsArr.slice(0,3)}/>
                <h2 className="title-clothes">Explore Our Shop</h2>
                <div className="container-inner">
                    {productsArr.map((product:ProductModel,index:number) => <Product key={index} product={product} />)}
                </div>
            </div>
        </div>
    )
}

export default Electronics
