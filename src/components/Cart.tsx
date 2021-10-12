import React from 'react'
import { Link } from 'react-router-dom'
import {Product as ProductModel} from '../APIController/interfaces'
import CartItem from './CartItem'

type CartProps = {
    cart:ProductModel[]
    handleCart:any
}



const Cart:React.FC<CartProps> = ({cart,handleCart}) => {
    
    return (
        <div className="cart">
            <i className="fa fa-close"  onClick={()=>{handleCart()}}></i>
            {cart.length == 0 ? <h2>Your Cart Is Empty</h2> : null}
            {cart.map((item:ProductModel,index:number)=>{
                return <CartItem key={item.id} item = {item} />
            })}
            <Link to="/bag" className="cart__bag">
                <button onClick={()=>{handleCart()}}>Show Bag</button>
            </Link>
        </div>
    )
}

export default Cart
