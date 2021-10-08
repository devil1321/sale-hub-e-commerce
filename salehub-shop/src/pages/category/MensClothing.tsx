import React,{ useState } from 'react'
import { Product as ProductModel }  from '../../APIController/interfaces'
import { productsActionsCreators } from '../../APIController/action-creators/productsActions'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import CarouselClothes from '../../components/CarouselClothes'
const Electronics = () => {
    const dispatch = useDispatch()
    const { getCategory } = bindActionCreators(productsActionsCreators,dispatch)
    const [slides,setSlides] = useState<string[]>([
        'mens-1.jpg',
        'mens-2.jpg',
        'mens-3.jpg'
    ])
    return (
        <div className="mens">
            <CarouselClothes slides={slides} fix />
            <div className="mens__content">
                mens
            </div>
        </div>
    )
}

export default Electronics
