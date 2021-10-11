import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { cartActionsCreators } from '../APIController/action-creators/cartActions'
import { State } from '../APIController/reducers'
import { Product as ProductModel } from '../APIController/interfaces'


const Bag = () => {
    const dispatch = useDispatch()
    const { cart }:{ cart:ProductModel[] } = useSelector((state:State) => state.cart)
    return (
        <div className="bag">
            <h1>Get free shipping for purchases over 599$</h1>
            <h3>Your cart</h3>
            <div className="bag__items">
                {cart.map(product =>{
                 const {id,title,price,category,image,quantity,size,color ,total} = product
                    return(
                        <div className="bag__item">
                            <img src={image} alt="beg-img" />
                            <div className="bag__text">
                                <h3>{title}</h3>
                                <p><span>Price:</span> {price}</p>
                                <p><span>Size:</span> {size}</p>
                                <p><span>Color:</span> {color}</p>
                                <p><span>Category:</span> {category}</p>
                                <div className="bag__footer">
                                    <div className="bag__quantity">
                                        <div>-</div>
                                        <div>{quantity}</div>
                                        <div>+</div>
                                    </div>
                                    <p><span>Quantity:</span> {quantity}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Bag
