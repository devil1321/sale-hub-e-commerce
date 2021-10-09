import React,{useState,useEffect} from 'react'
import { AnyIfEmpty } from 'react-redux'
import { Product as ProductModel } from '../APIController/interfaces'
type FeatureProps = {
    images:any[],
    fromRight?:any
}
const Feature:React.FC<FeatureProps> = ({images,fromRight}) => {
    const [product,setProduct] = useState<any>(null)

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
                    <button>Buy Now</button>
                </div>
            </div>}
            <div className={`feature__images  ${fromRight ? "fromRight" : ""}`}>
                {images.map((product:ProductModel,index:number) => {
                    return (
                    <div className={`feature__image ${index === 0 ? "active" : ""}`}>
                        <img src={product.image} onClick={(e)=>handleImage(e,product)}/>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Feature
