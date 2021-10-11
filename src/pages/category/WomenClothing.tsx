import React,{ useState } from 'react'
import { Product as ProductModel }  from '../../APIController/interfaces'
import { useSelector } from 'react-redux'
import CarouselClothes from '../../components/CarouselClothes'
import { State } from '../../APIController/reducers'
import Product from '../../components/Product'
import ProductsInnerHero from '../../components/ProductsInnerHero'
const WomenClothing = () => {
    let { products }:{ products:ProductModel[] } = useSelector((state:State) => state.products)
    products = products.filter(product => product.category === 'women\'s clothing')

    const [slides,setSlides] = useState<string[]>([
        'women-1.jpg',
        'women-2.jpg',
        'women-3.jpg'
    ])

    return (
        <div className="women">
            <CarouselClothes slides={slides} black />
            <div className="women__content">
                <ProductsInnerHero products={products.slice(0,3)}/>
                <h2 className="title-clothes">Explore Our Shop</h2>
                <div className="container-inner">
                    {products.map((product:ProductModel,index:number) => <Product key={index} product={product} />)}
                </div>

            </div>
        </div>
    )
}

export default WomenClothing
