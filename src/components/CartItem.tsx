import React from 'react'
import { Product as ProductModel} from '../APIController/interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { useDispatch } from 'react-redux'
import { cartActionsCreators } from '../APIController/action-creators/cartActions'
import { bindActionCreators } from 'redux'
type CartItemProps = {
    item:ProductModel,
}

const CartItem:React.FC<CartItemProps> = ({item}) => {
    const {id,category,image,title,quantity,total} = item
    const dispatch = useDispatch()
    const {removeFromCart,clearCart} = bindActionCreators(cartActionsCreators,dispatch)
    return (
        <div className="cart__item">
            <div className="cart__item-inner">
                <div className="cart__description">
                    <h2>{title}</h2>
                    <h3>Total: {total}$</h3>
                    <h3>Quantity: {quantity}</h3>
                    <h3>Category: {category}</h3>
                </div>
                <div className="cart__image">
                    <img src={image} alt="p-image" />
                </div>
            </div>
            <button className="cart__remove">
                <FontAwesomeIcon icon={faTrash} />
            </button>
            <button onClick = {(e)=>{clearCart(e)}}>Clear Cart</button>
        </div>
    )
}

export default CartItem
