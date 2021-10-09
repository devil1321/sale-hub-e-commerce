import React ,{useState,useEffect} from 'react'
import { Product as ProductModel }  from '../../APIController/interfaces'
import { productsActionsCreators } from '../../APIController/action-creators/productsActions'
import { useDispatch ,useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import CarouselClothes from '../../components/CarouselClothes'
import { State } from '../../APIController/reducers'
import Product from '../../components/Product'
import Feature from '../../components/Feature'
const Jewelery = () => {
    const dispatch = useDispatch()
    const { getCategory } = bindActionCreators(productsActionsCreators,dispatch)
    const products:any = useSelector((state:State) => state.products)
    const productsArr:ProductModel[] = products.products
    const [slides,setSlides] = useState<string[]>([
        'jewelery-1.jpg',
        'jewelery-2.jpg',
        'jewelery-3.jpg'
    ])
    useEffect(()=>{
        getCategory('jewelery')
    },[])
    return (
        <div className="jewelery">
            <CarouselClothes slides={slides}/>
            <div className="jewelery__content">
                <Feature images={productsArr.slice(0,3)} fromRight/>
                <h2 className="title-clothes">Explore Our Shop</h2>
                <div className="container-inner">
                    {productsArr.map((product:ProductModel,index:number) => <Product key={index} {...product} />)}
                </div>

            </div>
        </div>
    )
}

export default Jewelery
