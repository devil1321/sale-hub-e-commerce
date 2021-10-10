import React from 'react'
import { Product as ProductModel} from '../APIController/interfaces'

type CartItemProps = {
    item:ProductModel
}

const CartItem:React.FC<CartItemProps> = ({item}) => {
    const {id,category,price,title,quantity} = item
    return (
        <div className="cart__item">
            <h2>{title}</h2>
            <h3>Price: {price}$</h3>
            <h3>Quantity: {quantity}</h3>
            <h3>Category: {category}</h3>
        </div>
    )
}

export default CartItem
