import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

interface Cart{
    cart:Number;
}

const Nav:React.FC<Cart> = (props) => {
    const { cart } = props
    return (
        <div className="nav">
            <ul className="nav__navbar">
                <Link to="/electronics" ><li className="nav__item">Electronics</li></Link>
                <Link to="/jewellery" ><li className="nav__item">Jewelery</li></Link>
                <Link to="/men-clothing" ><li className="nav__item">Men`s clothing</li></Link>
                <Link to="/woman-clothing" ><li className="nav__item">Women`s Clothing</li></Link>
            </ul>
            <h1 className="nav__title">SaleHub</h1>
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
