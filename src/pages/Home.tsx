import React,{useState,useEffect} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Product as ProductModel } from '../APIController/interfaces'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux'
import { productsActionsCreators } from '../APIController/action-creators/productsActions';
import { State } from '../APIController/reducers';
import CarouselClothes from '../components/CarouselClothes'
import Slider from '../components/Slider'
const Homepage = () => {

    const { products }:{ products:ProductModel[] } = useSelector((state:State) => state.products)
    const dispatch = useDispatch()
    const { getProducts } = bindActionCreators(productsActionsCreators,dispatch)

    const [slides,setSlides] = useState<string[]>([
        'slideshow-1.jpg',
        'slideshow-2.jpg',
        'slideshow-3.jpg'
    ])
    const animateBlog = () =>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.slide-1',
                { top:'-100px', left:'-500px', opacity:0 },
                { top:'100px', left:'20px', opacity:1, force3D:true,
                scrollTrigger: {
                    trigger: '#article',
                    start:'-150px',
                    end:'+=50px',
                    scrub:6,
                    onLeaveBack: self => self.disable()
                }})

        gsap.fromTo('.slide-2',
                { top:'100px', left:'-500px', opacity:0 },
                { top:'0px', left:'80px', opacity:1, force3D:true,
                scrollTrigger: {
                trigger: '#article',
                scrub:6,
                start:'-150px',
                end:'+=50px',
                onLeaveBack: self => self.disable()

            }})

        let tl = gsap.timeline()
        tl.fromTo('#title',{x:600},{x:-50, force3D:true, 
            scrollTrigger: {
            trigger: '#article',
            scrub:6,
            start:'-150px',
            end:'+=50px',
            onLeaveBack: self => self.disable()

        }})
        .fromTo('.paragraph-1',{x:700},{x:0,force3D:true,
            scrollTrigger: {
                trigger: '#article',
                scrub:6,
                start:'-150px',
                end:'+=50px',
                onLeaveBack: self => self.disable()

        }})
        .fromTo('.paragraph-2',{x:800},{
            x:0,force3D:true,
            scrollTrigger: {
                trigger: '#article',
                scrub:6,
                start:'-150px',
                end:'+=50px',
                onLeaveBack: self => self.disable()

        }})
        .fromTo('.paragraph-3',{x:900},{
            x:0,force3D:true,
            scrollTrigger: {
                trigger: '#article',
                scrub:6,
                start:'-150px',
                end:'+=50px',
                onLeaveBack: self => self.disable()

        }})
        
        }
    useEffect(()=>{
        if(products.length === 0){
            getProducts()
        }
        animateBlog()
    },[])
    return (
        <div className="home">
            <CarouselClothes slides={slides}/>
            <section>
                <h2 className="title">Explore Collections</h2>
                <div className="home__feature">
                <div className="home__image">
                    <img src='/women-2.jpg' alt="" />
                    <button className="button">Explore Collection</button>
                    <button className="button">Women`s</button>
                </div>
                <div className="home__image-group">
                    <div className="home__image">
                        <img src="/women-1.jpg" alt="" />
                        <button>Explore Collection</button>
                        <button>Jewelery</button>
                    </div>
                    <div className="home__image">
                        <img src="/technology-3.jpg" alt="" /> 
                        <button>Explore Collection</button>
                        <button>Electonics</button>
                    </div>
                    <div className="home__image">
                        <img src="/mens-1.jpg" alt="" />
                        <button>Explore Collection</button>
                        <button>Men`s</button>
                    </div>
                </div>
                </div>
            </section>
            <section>
                <h2 className="title" id="article">Read Our Blog</h2>
                <div className="home__article">
                <div className="home__article-inner">
                    <div className="home__article-images">
                        <img className="slide-1" src="slideshow-3.jpg" alt="" />
                        <img className="slide-2" src="slideshow-1.jpg" alt="" />
                    </div>
                    <div className="home__article-text">
                        <h2 className="title" id="title">Best Clothes</h2>
                        <p className="paragraph-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nobis voluptatum aperiam porro dignissimos quod tempora quo quasi odio cum.</p>
                        <p className="paragraph-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nobis voluptatum aperiam porro dignissimos quod tempora quo quasi odio cum.</p>
                        <p className="paragraph-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, fuga.</p>
                    </div>
                </div>
                </div>
            </section>

            <section className="testimonials">
                <h2 className="title" id="welove">We Love</h2>
                <div className="home__testimonials">
                    <Slider items={products}/>
                </div>  
            </section>
        </div>
    )
}

export default Homepage
