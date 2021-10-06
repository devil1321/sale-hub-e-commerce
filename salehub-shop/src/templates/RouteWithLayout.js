import React from 'react'
import { Route } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
const RouteWithLayout = ({ component: Component, ...rest }) => {
    return ( 
        <Route {...rest }
            render = {props => ( 
                <div className = "container" >
                    <Nav />
                    <Component {...props }/> 
                    <Footer />
                </div>
            )
        }/>
    )
}

export default RouteWithLayout