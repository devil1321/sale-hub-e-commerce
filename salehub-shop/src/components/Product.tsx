import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Product as ProductModel }  from '../APIController/interfaces'
import { productsActions } from '../APIController/action-creators/productsActions'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

const Product:React.FC<ProductModel|any> = ({id,title,price,description,category,image,rating}) => {
    const dispatch = useDispatch()
    const { getProduct } = bindActionCreators(productsActions,dispatch)
    const [isModal,setIsModal] = useState<boolean>(false)

    return (
        <React.Fragment>
        {isModal && 
            <div className="product__modal-wrapper">
                <div className="product__modal">
                    <div className="product__close-modal" onClick={()=>{setIsModal(false)}}>X</div>
                    <img src={image} alt="modal" />
                    <div className="product__modal-text">
                        <h3>{title}</h3>
                        <h3>Price: {price}$</h3>                        
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        }
        <div className="product">
                <Link to={`/details-${category}/${id}`} onClick={() => {getProduct(id)}}>
                    <div className="product__image">
                        <img src={image} alt="product-image" />
                    </div>
                </Link>
            <h3>{title}</h3>
            <div className="product__footer">
                <p className="product__price"  onClick={()=>{setIsModal(true)}}>{price}$</p>
                <p className="product__badge red">Rate {rating.rate}</p>
                <p className="product__badge yellow">Count {rating.count}</p>
                <button>Show</button>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Product
