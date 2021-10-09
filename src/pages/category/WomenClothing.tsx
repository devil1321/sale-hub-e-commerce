import React,{ useState,useEffect } from 'react'
import { Product as ProductModel }  from '../../APIController/interfaces'
import { productsActionsCreators } from '../../APIController/action-creators/productsActions'
import { useDispatch,useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import CarouselClothes from '../../components/CarouselClothes'
import { State } from '../../APIController/reducers'
import Product from '../../components/Product'
import ProductsInnerHero from '../../components/ProductsInnerHero'
const WomenClothing = () => {
    const dispatch = useDispatch()
    const { getCategory } = bindActionCreators(productsActionsCreators,dispatch)
    const products:any = useSelector((state:State) => state.products)
    const productsArr:ProductModel[] = products.products
    const [slides,setSlides] = useState<string[]>([
        'women-1.jpg',
        'women-2.jpg',
        'women-3.jpg'
    ])
    useEffect(()=>{
        getCategory('women\'s clothing')
        
    },[])
    return (
        <div className="women">
            <CarouselClothes slides={slides} black />
            <div className="women__content">
                <ProductsInnerHero products={productsArr.slice(0,3)}/>
                <h2 className="title-clothes">Explore Our Shop</h2>
                <div className="container-inner">
                    {productsArr.map((product:ProductModel,index:number) => <Product key={index} {...product} />)}
                </div>

            </div>
        </div>
    )
}

export default WomenClothing
