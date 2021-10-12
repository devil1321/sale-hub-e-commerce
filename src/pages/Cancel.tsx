import React from 'react'
import { Link } from 'react-router-dom'

const Cancel = () => {
    return (
        <div className="cancel">
               <h1>Your order has been canceled </h1>
            <Link to="/">
                <button>Return Shopping</button>
            </Link>
        </div>
    )
}

export default Cancel
