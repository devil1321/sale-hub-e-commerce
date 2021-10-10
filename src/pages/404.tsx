import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <div className="notfound" style={{backgroundImage:`url('/technology-1.jpg')`}}>
            <h2>Error 404</h2>
            <h1>Page Not Found</h1>
            <Link to="/">
                <button>Return Shopping</button>
            </Link>
        </div>
    )
}

export default NotFound
