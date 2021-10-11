import React,{useState,useEffect} from 'react'
import { Product as ProductModel } from '../APIController/interfaces'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { cartActionsCreators } from '../APIController/action-creators/cartActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { handleSize } from '../APIController/modules/modules'
type FeatureProps = {
    images:any[],
    fromRight?:any
}

const Feature:React.FC<FeatureProps> = ({images,fromRight}) => {
    const dispatch = useDispatch()
    const { addToCart } = bindActionCreators(cartActionsCreators,dispatch)
    const [product,setProduct] = useState<any>(null)
    const [size,setSize] = useState<string>("S")

    const handleImage = (e:any,image:ProductModel):void =>{
        const images = document.querySelectorAll('.feature__image')
        images.forEach(img => img.classList.remove('active'))
        e.target.parentElement.classList.add('active')
        setProduct(image)
    }


    useEffect(()=>{
        setProduct(images[0])
    },[images])
    return (
        <div className="feature">
            {product && <div className={`feature__product ${fromRight ? "fromRight" : ""}`}>
                <img src={product.image} alt="" />
                <div className="feature__product-text">
                    <h2>{product.title}</h2>
                    <h3>Price: {product.price}$</h3>
                    <h3 >Description</h3>
                    <p>{product.description}</p>
                    <h3>Price: {product.price}$</h3>    
                    {product.category !== 'electronics' 
                    && <div className="feature__sizes-wrapper">
                        <div onClick={(e)=>{handleSize(e,setSize)}} className="feature__size-btn active" id="S">S</div>
                        <div onClick={(e)=>{handleSize(e,setSize)}} className="feature__size-btn" id="M">M</div>
                        <div onClick={(e)=>{handleSize(e,setSize)}} className="feature__size-btn" id="L">L</div>
                        <div onClick={(e)=>{handleSize(e,setSize)}} className="feature__size-btn" id="XL">XL</div>
                    </div>}
                    {!product.inCart 
                    ? <button onClick={(e)=>{addToCart(e,product,product.quantity + 1,size)}}>Buy Now</button>
                    : <button>In Cart <FontAwesomeIcon icon={faCartPlus} /></button>}
                </div>
            </div>}
            <div className={`feature__images  ${fromRight ? "fromRight" : ""}`}>
                {images.map((product:ProductModel,index:number) => {
                    return (
                    <div className={`feature__image ${index === 0 ? "active" : ""}`}>
                        <img src={product.image} onClick={(e)=>handleImage(e,product)}/>
                    </div>s
                )
            })}
            </div>
        </div>
    )
}

export default Feature
