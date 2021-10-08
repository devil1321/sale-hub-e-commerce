import React,{useState} from 'react'
import { Product as ProductModel }  from '../../APIController/interfaces'
import { productsActionsCreators } from '../../APIController/action-creators/productsActions'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import CarouselElectronics from '../../components/CarouselElectronics'
const Electronics = () => {
    const dispatch = useDispatch()
    const { getCategory } = bindActionCreators(productsActionsCreators,dispatch)
    const [slides,setSlides] = useState<string[]>([
        'technology-1.jpg',
        'technology-2.jpg',
        'technology-3.jpg'
    ])
    return (
        <div className="electronics">
            <CarouselElectronics slides ={slides} />
            <div className="electronics__content"></div>
        </div>
    )
}

export default Electronics
