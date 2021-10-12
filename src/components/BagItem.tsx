import React, { useEffect,useState } from 'react'
import {Product as ProductModel} from '../APIController/interfaces'
import { cartActionsCreators } from '../APIController/action-creators/cartActions'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
type BagProps = {
    product:ProductModel
}
const BagItem:React.FC<BagProps> = ({product}) => {
    const dispatch = useDispatch()
    const { increaseCartProduct, decreaseCartProduct,handleColour } = bindActionCreators(cartActionsCreators,dispatch)
    const { id,title,price,category,image,quantity,size,color ,total } = product
    const [isChange,setIsChange] = useState<boolean>(false)
    useEffect(()=>{
        setIsChange(!isChange)
    },[isChange])
    return (
        <div className="bag__item">
          <img src={image} alt="beg-img" />
          <div className="bag__text">
              <h3>{title}</h3>
              <p><span>Price:</span> {price}$</p>
              <p><span>Size:</span> {size}</p>
              <p className="bag__color-field"><span>Color:</span> <div className="bag__item-color" style={{backgroundColor:color}}></div></p>
              <div className="details__colour">
                    <div className="details__colour-red" id="red" onClick={(e:any)=>{
                        handleColour(e,id,e.target.id)
                         setIsChange(!isChange)
                        }} ></div>
                    <div className="details__colour-black" id="black" onClick={(e:any)=>{
                        handleColour(e,id,e.target.id)
                         setIsChange(!isChange)
                        }} ></div>
                    <div className="details__colour-brown" id="brown" onClick={(e:any)=>{
                        handleColour(e,id,e.target.id)
                         setIsChange(!isChange)
                        }} ></div>
                    <div className="details__colour-white" id="white" onClick={(e:any)=>{
                        handleColour(e,id,e.target.id)
                         setIsChange(!isChange)
                        }} ></div>
                    <div className="details__colour-green" id="green" onClick={(e:any)=>{
                        handleColour(e,id,e.target.id)
                         setIsChange(!isChange)
                        }} ></div>
              </div>
              
              <p><span>Category:</span> {category}</p>
              <div className="bag__footer">
                  <div className="bag__quantity">
                      <div  onClick={(e)=>{decreaseCartProduct(e,id)}}>-</div>
                      <div>{quantity}</div>
                      <div  onClick={(e)=>{increaseCartProduct(e,id)}}>+</div>
                  </div>
              </div>
          </div>
        </div>
    )
}

export default BagItem
