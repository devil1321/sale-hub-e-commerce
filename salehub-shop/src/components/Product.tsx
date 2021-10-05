import React from 'react'
import { Link } from 'react-router-dom'
import { Product as ProductModel }  from '../APIController/interfaces'
import { productsActions } from '../APIController/action-creators/productsActions'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

const Product:React.FC<ProductModel|any> = ({id,title,price,description,category,image,rating}) => {
    const dispatch = useDispatch()
    const { getProduct } = bindActionCreators(productsActions,dispatch)
    return (
        <div className="product">
                <Link to={`/details-${category}/${id}`} onClick={() => {getProduct(id)}}>
                    <div className="product__image">
                        <img src={image} alt="product-image" />
                    </div>
                </Link>
            <h3>{title}</h3>
            <div className="product__footer">
                <p className="product__price">{price}$</p>
                <p className="product__badge red">Rate {rating.rate}</p>
                <p className="product__badge yellow">Count {rating.count}</p>
            </div>
        </div>
    )
}

export default Product
