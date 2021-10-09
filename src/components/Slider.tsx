import React from 'react'
import { Product as ProductModel } from '../APIController/interfaces'

type SliderProps = {
    items:ProductModel[]
}

const Slider:React.FC<SliderProps> = ({items}) => {
    return (
        <div className="slider">
            
        </div>
    )
}

export default Slider
