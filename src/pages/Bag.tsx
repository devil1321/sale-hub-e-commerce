import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { cartActionsCreators } from '../APIController/action-creators/cartActions'
import { State } from '../APIController/reducers'
import { Product as ProductModel } from '../APIController/interfaces'
import BagItem from '../components/BagItem'


const Bag = () => {
    const dispatch = useDispatch()
    const { cart, total, shipping }:{ cart:ProductModel[],total:number, shipping:number } = useSelector((state:State) => state.cart)
    const { setTotal } = bindActionCreators(cartActionsCreators,dispatch)
    useEffect(()=>{
        setTotal(cart,shipping)
    },[cart.length])
    return (
        <div className="bag">
            <h1 className="bag__title">Get free shipping for purchases over 599$</h1>
            <h3 className="bag__subtitle">Your cart</h3>
            <div className="bag__items">
                {cart.map(product =><BagItem product={product} />)}
            </div>
            <div className="bag__summary">
                <h2>Total:{total}$</h2>
                <h3>Shipping: {cart.length === 0 ? 0 : shipping}$</h3>
                <button>Pay</button>
            </div>
        </div>
    )
}

export default Bag
