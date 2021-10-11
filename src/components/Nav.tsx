import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { cartActionsCreators } from '../APIController/action-creators/cartActions'
import { Product as ProductModel } from '../APIController/interfaces'
import Cart from './Cart'
import CartItem from './CartItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { State } from '../APIController/reducers'
import { setTimeout } from 'timers'

const Nav = () => {
    const [isOpen,setIsOpen] = useState<boolean>(false)
    const dispatch = useDispatch()
    const { cart }:{cart:ProductModel[]} = useSelector((state:State) => state.cart)
    const { removeFromCart,clearCart } = bindActionCreators(cartActionsCreators,dispatch)
  
    const handleMenu = () =>{
        let navMenu = document.querySelector<HTMLUListElement>('.nav__item-menu')!
        if(!isOpen){
            setIsOpen(true)
            navMenu.classList.add('open')
        }else {
            navMenu.classList.remove('open')
            setTimeout(()=>{
                setIsOpen(false)
            },1000)
        }
    }

    const handleCart = ():void =>{
        let cart = document.querySelector<HTMLDivElement>('.cart')!
        if(cart){
            if(cart.style.transform === 'translateX(100%)'){   
                cart.style.transform = 'translateX(0%)'

            }else{
                cart.style.transform = 'translateX(100%)'
               
            }
        }
    }
    
    return (
        <div className="nav">
            <ul className="nav__navbar">
                <Link to="/" ><li className="nav__item">Home</li></Link>
                <Link to="/all" ><li className="nav__item">All</li></Link>
                <li className="nav__item" onClick={()=>{handleMenu()}}>
                    Category
                        <ul className="nav__item-menu" >
                            <Link to="/category/electronics"><li onClick={()=>{handleMenu()}}>Electronics</li></Link>
                            <Link to="/category/jewelery"><li onClick={()=>{handleMenu()}}>Jewelery</li></Link>
                            <Link to="/category/men`s clothing"><li onClick={()=>{handleMenu()}}>Men`s clothing</li></Link>
                            <Link to="/category/women`s Clothing"><li onClick={()=>{handleMenu()}}>Women`s Clothing</li></Link>
                        </ul>                            
                </li>
                <Link to="/blog" ><li className="nav__item">Blog</li></Link>
            </ul>
            <Link to="/" >
                <h1 className="nav__title">SaleHub</h1>
            </Link>
            <ul className="nav__menu">
                <li className="nav__menu-item">
                    <FontAwesomeIcon icon={faSearch} />
                    Search
                </li>
                <li className="nav__menu-item">Account</li>
                <li className="nav__menu-item" onClick={()=>{handleCart()}}>
                    <FontAwesomeIcon icon={faCartArrowDown} />
                    MyCart
                    <div className="nav__badge">{cart.length}</div>
                </li>
                <Cart cart={cart} handleCart ={handleCart}/>
            </ul>
        </div>
    )
}

export default Nav
