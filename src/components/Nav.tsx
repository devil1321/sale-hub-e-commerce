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
    const handleNav = () =>{
        const navBtn = document.querySelector<HTMLDivElement>('.plate')!
        const navList = document.querySelector<HTMLUListElement>('.nav__navbar')!
        navBtn.classList.toggle('active')
        if(navBtn.classList.contains('active')){
            navList.style.height = '300px'
        }
        else{
            navList.style.height = '0%'
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
                <li className="nav__item lg" onClick={()=>{handleMenu()}}>
                    Category 
                        <ul className="nav__item-menu" >
                            <Link to="/category/electronics"><li onClick={()=>{
                                handleMenu()
                                }}>Electronics</li></Link>
                            <Link to="/category/jewelery"><li onClick={()=>{
                                handleMenu()
                                }}>Jewelery</li></Link>
                            <Link to="/category/men`s clothing"><li onClick={()=>{
                                handleMenu()
                                }}>Men`s clothing</li></Link>
                            <Link to="/category/women`s Clothing"><li onClick={()=>{
                                handleMenu()
                                }}>Women`s Clothing</li></Link>
                        </ul>                            
                </li>
                <li className="nav__item sm" onClick={()=>{handleMenu()}}>
                    <ul className="nav__item-menu-sm" >
                        <Link to="/category/electronics"><li onClick={()=>{
                            handleNav()
                            }}>Electronics</li></Link>
                        <Link to="/category/jewelery"><li onClick={()=>{
                            handleNav()
                            }}>Jewelery</li></Link>
                        <Link to="/category/men`s clothing"><li onClick={()=>{
                            handleNav()
                            }}>Men`s clothing</li></Link>
                        <Link to="/category/women`s Clothing"><li onClick={()=>{
                            handleNav()
                            }}>Women`s Clothing</li></Link>
                    </ul>           
                </li>
                <Link to="/blog" ><li className="nav__item" onClick={()=>{handleNav()}}>Blog</li></Link>
            </ul>
            <Link to="/" >
                <h1 className="nav__title">SaleHub</h1>
            </Link>
            <div className="plate plate2" onClick={()=>{handleNav()}}>
                        <svg className="burger" version="1.1" height="100" width="100" viewBox="0 0 100 100">
                          <path className="line line1" d="M 50,65 H 70 C 70,65 75,65.198488 75,70.762712 C 75,73.779026 74.368822,78.389831 66.525424,78.389831 C 22.092231,78.389831 -18.644068,-30.508475 -18.644068,-30.508475" />
                          <path className="line line2" d="M 50,35 H 70 C 70,35 81.355932,35.300135 81.355932,25.635593 C 81.355932,20.906215 78.841706,14.830508 72.881356,14.830508 C 35.648232,14.830508 -30.508475,84.322034 -30.508475,84.322034" />
                          <path className="line line3" d="M 50,50 H 30 C 30,50 12.288136,47.749959 12.288136,60.169492 C 12.288136,67.738339 16.712974,73.305085 40.677966,73.305085 C 73.791674,73.305085 108.47458,-19.915254 108.47458,-19.915254" />
                          <path className="line line4" d="M 50,50 H 70 C 70,50 81.779661,50.277128 81.779661,36.607372 C 81.779661,28.952694 77.941689,25 69.067797,25 C 39.95532,25 -16.949153,119.91525 -16.949153,119.91525" />
                          <path className="line line5" d="M 50,65 H 30 C 30,65 17.79661,64.618439 17.79661,74.152543 C 17.79661,80.667556 25.093813,81.355932 38.559322,81.355932 C 89.504001,81.355932 135.59322,-21.186441 135.59322,-21.186441" />
                          <path className="line line6" d="M 50,35 H 30 C 30,35 16.525424,35.528154 16.525424,24.152542 C 16.525424,17.535987 22.597755,13.559322 39.40678,13.559322 C 80.617882,13.559322 94.067797,111.01695 94.067797,111.01695" />
                        </svg>
                        <svg className="x" version="1.1" height="100" width="100" viewBox="0 0 100 100">
                          <path className="line" d="M 34,32 L 66,68" />
                          <path className="line" d="M 66,32 L 34,68" />
                        </svg>
                      </div>
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
