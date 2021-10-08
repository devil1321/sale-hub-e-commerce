import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

interface Cart{
    cart:Number;
}

const Nav:React.FC<Cart> = (props) => {
    const [isOpen,setIsOpen] = useState<boolean>(false)
    const { cart } = props

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
                <li className="nav__menu-item">
                    <FontAwesomeIcon icon={faCartArrowDown} />
                    MyCart
                    <div className="nav__badge">{cart} 0</div>
                </li>
            </ul>
        </div>
    )
}

export default Nav
