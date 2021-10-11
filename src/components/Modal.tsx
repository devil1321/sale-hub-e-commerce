import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { cartActionsCreators } from '../APIController/action-creators/cartActions'
import {Product as ProductModel } from '../APIController/interfaces'
type ModalProps = { 
    product:ProductModel,
    setIsModal:any
}

const Modal:React.FC<ModalProps> = ({product,setIsModal}) => {
    const [quantity,setQuantity] = useState<number>(1)
    const {id, image, title, price,inCart } = product
    const dispatch = useDispatch()
    const { addToCart } = bindActionCreators(cartActionsCreators,dispatch)
    const [isInCart,setIsInCart] = useState<boolean>(false)
    useEffect(()=>{
       setIsInCart(inCart)
    },[inCart])
    return (
        <div className="modal">
        <div className="modal__modal">
            <div className="modal__close-modal" onClick={()=>{setIsModal(false)}}>X</div>
            <img  src={image} alt="modal" />
            <div className="modal__modal-text">
                <h3>{title}</h3>
                <h3>Price: {price}$</h3>                        
                {!inCart 
                ? <button onClick = {(e)=>{
                    addToCart(e,product,quantity)
                    setIsInCart(true)
                }}>Buy Now <FontAwesomeIcon icon={faCartPlus} /></button>
                : <div className="modal__inCart">In Cart <FontAwesomeIcon icon={faCartPlus} /></div>
                }
            </div>
        </div>
    </div>
    )
}

export default Modal
