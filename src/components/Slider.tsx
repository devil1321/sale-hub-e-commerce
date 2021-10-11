import React,{useEffect, useState} from 'react'
import { Product as ProductModel } from '../APIController/interfaces'
import Product from '../components/Product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
type SliderProps = {
    items:ProductModel[]
}

const Slider:React.FC<SliderProps> = ({items}) => {
    const [move,setMove] = useState<number>(0)
    const [count,setCount] = useState<number>(0)
    const [way,setWay] = useState<string>('')
    const handleSetMove = (way:string):void=>{
        const product = document.querySelector<HTMLDivElement>('.product')!
        const slider = document.querySelector<HTMLDivElement>('.slider__carousel')!
        const width = product.clientWidth
        setWay(way)
        if(slider){
            console.log(count)
            if(way === 'next' &&  count < 6){
                setMove(move + width + 20) 
                setCount(count + 1)
                slider.style.transform = `translateX(-${move}px)`
            }else if(way === 'prev' &&  count > -6){
                setMove(move - width - 20) 
                setCount(count - 1)
            }else if(count >= 6 || count <= -6){
                setCount(0)
                setMove(0)
            }
        }
    }
    const handleMove = () =>{ 
        const slider = document.querySelector<HTMLDivElement>('.slider__carousel')!
        if(slider){
            if(way === 'next' &&  count <= 6){
                slider.style.transform = `translateX(-${move}px)`
            }
            else if(way === 'prev' &&  count >= -6){
                slider.style.transform = `translateX(${move * (-1)}px)`
            }else if(count > 6 || count < -6){
                slider.style.transform = `translateX(${0}px)`
            }
        }
    }
    useEffect(()=>{
        handleMove()
    },[move,way,count])
    return (
        <div className="slider">
            <div className="slider__next" onClick = {()=>{handleSetMove('next')}}><FontAwesomeIcon icon={faChevronCircleRight} /></div>
            <div className="slider__prev" onClick = {()=>{handleSetMove('prev')}}><FontAwesomeIcon icon={faChevronCircleLeft} /></div>
            <div className="slider__carousel">
            {items.map((item:ProductModel)=>{
                const { id, image, title, price, category,description,rating } = item
                return (
                    <Product disabled product={item} />
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
