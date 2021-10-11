import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Product as ProductModel }  from '../APIController/interfaces'
import { productsActionsCreators } from '../APIController/action-creators/productsActions'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import Modal from '../components/Modal'
type ProductProps = {
    product:ProductModel
}

const Product:React.FC<ProductProps> = ({product}) => {
    const {id,title,price,description,category,image,rating,inCart} = product
    const dispatch = useDispatch()
    const { getProduct } = bindActionCreators(productsActionsCreators,dispatch)
    const [isModal,setIsModal] = useState<boolean>(false)
  
    return (
        <React.Fragment>
            {isModal && <Modal product={product} setIsModal={setIsModal} /> }
            <div className="product">
                    <Link to={`/details-${category}/${id}`} onClick={() => {getProduct(id)}}>
                        <div className="product__image">
                            <img src={image} alt="product-image" />
                        </div>
                    </Link>
                <h3>{title}</h3>
                <div className="product__footer">
                    {!inCart 
                        ? <p className="product__price"  onClick={()=>{setIsModal(true)}}>{price}$</p> 
                        : <button className="product__inCart" onClick={()=>{setIsModal(true)}}>InCart<FontAwesomeIcon icon={faCartPlus} /></button>}
                    <p className="product__badge red">Rate {rating.rate}</p>
                    <p className="product__badge yellow">Count {rating.count}</p>
                    </div>
            </div>
        </React.Fragment>
    )
}

export default Product
