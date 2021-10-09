import React from 'react'
import { Product as ProductModel } from '../APIController/interfaces'
import Product from '../components/Product'

type SliderProps = {
    items:ProductModel[]
}

const Slider:React.FC<SliderProps> = ({items}) => {
   
    return (
        <div className="slider">
            <div className="slider__next"></div>
            <div className="slider__prev"></div>
            <div className="slider__carousel">
            {items.map((item:ProductModel)=>{
                const { id, image, title, price, category,description,rating } = item
                return (
                    <Product id={id} image={image} title={title} price={price} category={category} rating={rating} description={description}/>
                    )}
            )}
            {items.map((item:ProductModel)=>{
                return <div className="slider__dot"></div>
            })}
            </div>
        </div>
    )
}

export default Slider
