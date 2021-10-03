import React,{useState,useEffect} from 'react'
import { gsap } from 'gsap'
const Carousel = () => {
    
    const [slide,setSlide] = useState(1)
    const carousel = () =>{
        let tl = gsap.timeline()
        let textTl = gsap.timeline()
        if(slide == 1){
        tl.fromTo('.carousel__slide-1',{
            force3D:true,
            opacity:0
        },{
            force3D:true,
            duration:2,
            opacity:1
        })
        .fromTo('.carousel__slide-1 h6',{opacity:50,y:-50},{y:0,opacity:1,duration:1})
        textTl.fromTo('.carousel__slide-1 h2',{opacity:0,x:400},{x:0,opacity:1,duration:1})
            .fromTo('.carousel__slide-1 h3',{opacity:0,x:450,y:20},{x:0,y:0,opacity:1,duration:1})
            .fromTo('.carousel__slide-1 p',{opacity:0,x:500},{x:0,opacity:1,duration:1})            
            .fromTo('.carousel__slide-1 button',{opacity:0,x:50},{x:0,opacity:1,duration:1})            
            .to('.carousel__slide-1',{            
                force3D:true,
                duration:1,
                delay:2,
                opacity:0,
            })
            setTimeout(()=>{
                setSlide(2)
            },6800)
        }
         if(slide == 2){
        tl.fromTo('.carousel__slide-2',{
            force3D:true,
            opacity:0
        },{
            force3D:true,
            duration:2,
            opacity:1
        })
        .fromTo('.carousel__slide-2 h6',{opacity:50,y:-50},{y:0,opacity:1,duration:1})
        textTl.fromTo('.carousel__slide-2 h2',{opacity:0,x:-400},{x:0,opacity:1,duration:1})
            .fromTo('.carousel__slide-2 h3',{opacity:0,x:450,y:20},{x:0,y:0,opacity:1,rotateX:360,duration:1})
            .fromTo('.carousel__slide-2 p',{opacity:0,x:500},{x:0,opacity:1,duration:1})            
            .fromTo('.carousel__slide-2 button',{opacity:0,x:-50},{x:0,opacity:1,duration:1})            
            .to('.carousel__slide-2',{            
                force3D:true,
                duration:1,
                delay:2,
                opacity:0
            })
            setTimeout(()=>{
                setSlide(3)
            },6800)

        }
        if(slide == 3){
        tl.fromTo('.carousel__slide-3',{
            force3D:true,
            opacity:0
        },{
            force3D:true,
            duration:2,
            opacity:1
        })
        .fromTo('.carousel__slide-3 h6',{opacity:50,y:-50},{y:0,opacity:1,duration:1})
        textTl.fromTo('.carousel__slide-3 h2',{opacity:0,x:400},{x:0,opacity:1,duration:1})
            .fromTo('.carousel__slide-3 h3',{opacity:0,x:450,y:20},{x:0,y:0,opacity:1,duration:1})
            .fromTo('.carousel__slide-3 p',{opacity:0,x:500},{x:0,opacity:1,duration:1})            
            .fromTo('.carousel__slide-3 button',{opacity:0,y:50},{y:0,opacity:1,duration:1})            
            .to('.carousel__slide-3',{            
                force3D:true,
                duration:1,
                delay:2,
                opacity:0
            })
            setTimeout(()=>{
                setSlide(1)
            },6800)

        }
    }

    useEffect(()=>{
        carousel()
    },[slide])

    return (
        <div className="carousel">
            {slide == 1 && <div className="carousel__slide-1">
                <img src={'/slideshow-1.jpg'} alt="" />
                <div className="carousel__slide-1-text">
                    <h6>New Collection</h6>
                    <h2>Find Your</h2>
                    <h3>Perfect</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, officiis.</p>
                    <button>Shop Collection</button>
                </div>
            </div>}
            {slide == 2 && <div className="carousel__slide-2">
                <img src={'/slideshow-2.jpg'} alt="" />
                <div className="carousel__slide-2-text">
                    <h6>The Hotlist of</h6>
                    <h2>Summer</h2>
                    <h3>Perfect</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, officiis.</p>?s
                    <button>Shop Collection</button>
                </div>
            </div>}
            {slide == 3 && <div className="carousel__slide-3">
                <img src={'/slideshow-3.jpg'} alt="" />
                <div className="carousel__slide-3-text">
                    <h6>New Collection</h6>
                    <h2>Fashion</h2>
                    <h3>Glasses</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, officiis.</p>
                    <button>Shop Collection</button>
                </div>
            </div>}
        </div>
    )
}

export default Carousel
