import React,{useState} from 'react'
import CarouselClothes from '../components/CarouselClothes'
const Homepage = () => {
    const [slides,setSlides] = useState<string[]>([
        'slideshow-1.jpg',
        'slideshow-2.jpg',
        'slideshow-3.jpg'
    ])
    return (
        <div className="home">
            <CarouselClothes slides={slides}/>
            <h2 className="title">Explore Collections</h2>
            <div className="home__feature">
                <div className="home__image">
                    <img src='/women-2.jpg' alt="" />
                    <button>Explore Collection</button>
                    <button>Women`s</button>
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
            <div className="home__article">
                <h2 className="title">Read Our Blog</h2>
                <div className="home__article-inner">
                    <div className="home__article-images">
                        <img src="slideshow-3.jpg" alt="" />
                        <img src="slideshow-1.jpg" alt="" />
                    </div>
                    <div className="home__article-text">
                        <h2>Best Clothes</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nobis voluptatum aperiam porro dignissimos quod tempora quo quasi odio cum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nobis voluptatum aperiam porro dignissimos quod tempora quo quasi odio cum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, fuga.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
