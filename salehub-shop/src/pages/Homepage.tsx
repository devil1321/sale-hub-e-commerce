import React,{ useEffect } from 'react'
import { productsActions } from '../APIController/action-creators/productsActions'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import Product from '../components/Product'
import Carousel from '../components/Carousel'
import { State } from '../APIController/reducers'
const Homepage:React.FC = () => {

    const products:any  = useSelector((state:State) => state.products)
    const productsArr = products.products
    const dispatch = useDispatch()
    const { getProducts } = bindActionCreators(productsActions,dispatch)

    useEffect(()=>{
        window.scrollTo(0,0)
        getProducts()        
    },[])

    return (
        <div className="home">
            <Carousel />
            <h2 className="home__title">Products</h2>
            <div className="home__products">
                {productsArr.map((product:Object,index:number) => <Product key={index} {...product} />)}
            </div>
        </div>
    )
}



export default Homepage
