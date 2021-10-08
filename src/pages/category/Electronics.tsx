import React,{useState,useEffect} from 'react'
import { Product as ProductModel }  from '../../APIController/interfaces'
import { productsActionsCreators } from '../../APIController/action-creators/productsActions'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import CarouselElectronics from '../../components/CarouselElectronics'
import { State } from '../../APIController/reducers'
import Product from '../../components/Product'
import Feature from '../../components/Feature'
const Electronics = () => {
    const products:any = useSelector((state:State) => state.products)
    const productsArr:ProductModel[] = products.products
    const dispatch = useDispatch()
    const { getCategory } = bindActionCreators(productsActionsCreators,dispatch)
    const [slides,setSlides] = useState<string[]>([
        'technology-1.jpg',
        'technology-2.jpg',
        'technology-3.jpg'
    ])
    useEffect(()=>{
        getCategory('electronics')
    },[])
    return (
        <div className="electronics">
            <CarouselElectronics slides ={slides} />
            <div className="electronics__content">
                <Feature images={productsArr.slice(0,3)}/>
                <div className="container-inner">
                    {productsArr.map((product:ProductModel,index:number) => <Product key={index} {...product} />)}
                </div>
            </div>
        </div>
    )
}

export default Electronics
