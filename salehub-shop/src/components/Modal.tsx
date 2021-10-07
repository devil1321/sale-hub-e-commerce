import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

type ModalProps = { 
    image:string,
    title:string,
    price:number,
    setIsModal:any
}

const Modal:React.FC<ModalProps> = ({image,title,price,setIsModal}) => {
    return (
        <div className="modal">
        <div className="modal__modal">
            <div className="modal__close-modal" onClick={()=>{setIsModal(false)}}>X</div>
            <img src={image} alt="modal" />
            <div className="modal__modal-text">
                <h3>{title}</h3>
                <h3>Price: {price}$</h3>                        
                <button>Buy Now <FontAwesomeIcon icon={faCartPlus} /></button>
            </div>
        </div>
    </div>
    )
}

export default Modal
