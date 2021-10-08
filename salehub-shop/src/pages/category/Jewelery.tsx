import React ,{useState} from 'react'
import { Product as ProductModel }  from '../../APIController/interfaces'
import { productsActionsCreators } from '../../APIController/action-creators/productsActions'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import CarouselClothes from '../../components/CarouselClothes'

const Jewelery = () => {
    const [slides,setSlides] = useState<string[]>([
        'jewelery-1.jpg',
        'jewelery-2.jpg',
        'jewelery-3.jpg'
    ])
    const dispatch = useDispatch()
    const { getCategory } = bindActionCreators(productsActionsCreators,dispatch)
    return (
        <div className="jewelery">
            <CarouselClothes slides={slides}/>
            <div className="jewelery__content">
                jewelery
            </div>
        </div>
    )
}

export default Jewelery
