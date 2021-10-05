import React from 'react'
import { Product as ProductModel }  from '../APIController/interfaces'


const Product:React.FC<ProductModel|any> = ({id,title,price,description,category,image,rating}) => {
    return (
        <div className="product">
            <div className="product__image">
                <img src={image} alt="product-image" />
            </div>
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
