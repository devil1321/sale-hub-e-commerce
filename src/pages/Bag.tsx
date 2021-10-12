import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { cartActionsCreators } from '../APIController/action-creators/cartActions'
import { State } from '../APIController/reducers'
import { Product as ProductModel } from '../APIController/interfaces'
import BagItem from '../components/BagItem'


const Bag = () => {
    const dispatch = useDispatch()
    const { cart, total }:{ cart:ProductModel[],total:number } = useSelector((state:State) => state.cart)
    return (
        <div className="bag">
            <h1 className="bag__title">Get free shipping for purchases over 599$</h1>
            <h3 className="bag__subtitle">Your cart</h3>
            <div className="bag__items">
                {cart.map(product =><BagItem product={product} />)}
            </div>
            <div className="bag__summary">
                <h2>Total:{total}$</h2>
                <h3>Shipping: 20$</h3>
                <button>Pay</button>
            </div>
        </div>
    )
}

export default Bag
