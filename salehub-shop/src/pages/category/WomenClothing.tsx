import React,{ useState } from 'react'
import { Product as ProductModel }  from '../../APIController/interfaces'
import { productsActionsCreators } from '../../APIController/action-creators/productsActions'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import CarouselClothes from '../../components/CarouselClothes'

const WomenClothing = () => {
    const dispatch = useDispatch()
    const { getCategory } = bindActionCreators(productsActionsCreators,dispatch)
    const [slides,setSlides] = useState<string[]>([
        'women-1.jpg',
        'women-2.jpg',
        'women-3.jpg'
    ])
    return (
        <div className="women">
            <CarouselClothes slides={slides} black />
            <div className="women__content">
                women
            </div>
        </div>
    )
}

export default WomenClothing
