import React, { useEffect } from 'react'
import { productsActions } from '../../APIController/action-creators/productsActions'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

const DetailsElectronics = () => {
    const dispatch = useDispatch()
    const { getProduct } = bindActionCreators(productsActions,dispatch)
    const  { product } = useSelector(state => state.products)
    useEffect(()=>{
        console.log(product)
    },[product])
    return (
        <div>
            {JSON.stringify(product)}
        </div>
    )
}

export default DetailsElectronics
