import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Product as ProductModel }  from '../APIController/interfaces'
import { productsActionsCreators } from '../APIController/action-creators/productsActions'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from '../components/Modal'
const Product:React.FC<ProductModel> = ({id,title,price,description,category,image,rating}) => {
    const dispatch = useDispatch()
    const { getProduct } = bindActionCreators(productsActionsCreators,dispatch)
    const [isModal,setIsModal] = useState<boolean>(false)

    return (
        <React.Fragment>
        {isModal && <Modal image={image} title={title} price={price} setIsModal={setIsModal} /> }

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
                </div>
        </div>
        </React.Fragment>
    )
}

export default Product
