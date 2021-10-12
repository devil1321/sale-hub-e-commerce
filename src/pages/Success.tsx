import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
    return (
        <div className="success">
            <h1>Your order has been processed </h1>
            <Link to="/">
                <button>Return Shopping</button>
            </Link>
        </div>
    )
}

export default Success
