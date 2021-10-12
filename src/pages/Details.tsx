import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { productsActionsCreators } from '../APIController/action-creators/productsActions'
import { cartActionsCreators } from '../APIController/action-creators/cartActions'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { State } from '../APIController/reducers'
// to fix type
import { Product as ProductModel }  from '../APIController/interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { handleSize } from '../APIController/modules/modules'

const Details = () => {
    
    type Review = {
        review:string,
        name:string,
        rating:number
    }
    const actions = Object.assign({},productsActionsCreators,cartActionsCreators)
    const dispatch = useDispatch()
    const { getProduct,addToCart } = bindActionCreators(actions,dispatch)
    const { product }: { product:ProductModel } = useSelector((state:State) => state.products)
    const { id, title, price, description, category, image, inCart,color, rating } = product
    const [quantity,setQuantity] = useState<number>(1)
    const [size,setSize] = useState<string>("S")
    const [newColor,setNewColor] = useState<string>('black')
    const [fakeReviews,setFakeReviews] = useState<Review[]>([
        {
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atque tempora nulla voluptate laborum vitae sint, harum fugiat impedit quam.',
            name:'John Doe',
            rating:5
        },
        {
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atque tempora nulla voluptate laborum vitae sint, harum fugiat impedit quam.',
            name:'Mike Doe',
            rating:2.5
        },
        {
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atque tempora nulla voluptate laborum vitae sint, harum fugiat impedit quam.',
            name:'Alicia Doe',
            rating:3.5
        },
        {
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atque tempora nulla voluptate laborum vitae sint, harum fugiat impedit quam.',
            name:'Janet Doe',
            rating:5
        },
        {
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atque tempora nulla voluptate laborum vitae sint, harum fugiat impedit quam.',
            name:'Steve Doe',
            rating:1.5
        }
    ])

    const hanleAnimateHero = ():void =>{  
        //   gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.details__hero-text h1',{y:-400,opacity:0},{y:0,opacity:1,rotateX:720,duration:1.5, 
        //     scrollTrigger: {
        //     trigger: '.details__hero-text',
        //     start:'-=100px',
        //     end:'+=300px',
        //     markers: true
        //   }
        })
        gsap.fromTo('.details__hero-text h3',{x:500,transform:"skewX(-220deg)"},{transform:"skewX(0deg)",x:0,duration:1.5})
        gsap.fromTo('.details__hero-text button',{y:500},{y:0,duration:1.5})
    }

    const handleTabs = (index:any):void =>{
        let tabs = document.querySelectorAll('.details__tab')!
        let btns = document.querySelectorAll('.details__tabs-btn')!
        btns.forEach(btn => btn.classList.remove('active'))
        btns[index].classList.add('active')
        tabs.forEach(tab=> tab.classList.remove('active'))
        tabs[index].classList.add('active')
    }
    
    useEffect(()=>{
        window.scrollTo(0,0)
        hanleAnimateHero()   
        if(newColor === 'black' && color){
            setNewColor(color)
         }
    },[product])

    return (
        <div className="details">
            <div className="details__hero">
                <div className="overlay"></div>
                <img src="/slideshow-3.jpg" alt="slideshow" />
                <div className="details__hero-text">
                    <h1>Explore Shop</h1>
                    <h3>Newest Trending</h3>
                    <Link to="/">
                        <button>Buy More</button>
                    </Link>
                </div>
            </div>
        <React.Fragment>
      
        {product.id !== 0 
           ? <React.Fragment>
                <div className="details__content">
                    <div className="details__image">
                        <img src={image} alt="modal" />
                    </div>
                    <div className="details__text">
                    <h1 className="details__text-heading">{title}</h1>
                    <div className="details__price">
                        <h3>Price: <span className="italic">{price}</span>$</h3>
                        <div className="details__icons">
                            {rating.rate >= 0.5 ? <FontAwesomeIcon icon={faStar}/> : null}
                            {rating.rate >= 1.5 ? <FontAwesomeIcon icon={faStar}/> : null}
                            {rating.rate >= 2.5 ? <FontAwesomeIcon icon={faStar}/> : null}
                            {rating.rate >= 3.5 ? <FontAwesomeIcon icon={faStar}/> : null}
                            {rating.rate >= 4.5 ? <FontAwesomeIcon icon={faStar}/> : null}
                        </div>
                    </div>
                    <p className="details__text-description">{description}</p>
                    <h3 className="details__text-category">Category: <span className="italic">{category}</span></h3>
                    <h3 className="details__text-stock">In Stock: <span className="italic">{rating.count}</span></h3>
                    <form action="">
                        <div className="details__colour-wrapper">
                            <h3>Colour: <span className="italic">{newColor}</span> </h3>
                            <div className="details__colour">
                                <div className="details__colour-red" id="red" onClick={(e:any)=>{setNewColor(e.target.id)}} ></div>
                                <div className="details__colour-black" id="black" onClick={(e:any)=>{setNewColor(e.target.id)}} ></div>
                                <div className="details__colour-brown" id="brown" onClick={(e:any)=>{setNewColor(e.target.id)}} ></div>
                                <div className="details__colour-white" id="white" onClick={(e:any)=>{setNewColor(e.target.id)}} ></div>
                                <div className="details__colour-green" id="green" onClick={(e:any)=>{setNewColor(e.target.id)}} ></div>
                            </div>
                        </div>
                        {category !== 'electronics' && <div className="details__sizes">
                            <h3>Sizes:</h3>
                            <div className="details__sizes-wrapper">
                                <div onClick={(e)=>{handleSize(e,setSize)}} className="details__size-btn active" id="S">S</div>
                                <div onClick={(e)=>{handleSize(e,setSize)}}  className="details__size-btn" id="M">M</div>
                                <div onClick={(e)=>{handleSize(e,setSize)}}  className="details__size-btn" id="L">L</div>
                                <div onClick={(e)=>{handleSize(e,setSize)}}  className="details__size-btn" id="XL">XL</div>
                            </div>
                        </div>}
                         <div className="details__notes-field">
                             <label htmlFor="Notes"><h3>Notes:</h3></label>
                             <textarea name="" id="" cols={70} rows={10} placeholder="Your Notes for your order"></textarea>
                        </div>
                        <div className="details__quantity-wrapper">
                            <h3>Quantity:</h3>
                            <div className="details__add-to-bag">
                                 <div className="details__quantity">
                                     <div  onClick={()=>{setQuantity(quantity - 1)}}>-</div>
                                     <div className="quantity">{quantity}</div>
                                     <div onClick={()=>{setQuantity(quantity + 1)}}>+</div>
                                 </div>
                                {inCart 
                                ? <button>InCart <FontAwesomeIcon icon={faCartPlus} /></button>
                                : <button onClick={(e)=>{addToCart(e,product,quantity,size,newColor)}}>Add To Bag</button>}
                                <Link to='/all'>
                                    <button>Continue Shopping</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                    <img className="details__payment" src="/payment.png" alt="" />
                </div>
                </div>
                <div className="details__tabs">
                <ul className="details__tabs-nav">
                    <li className="details__tabs-btn active" onClick={(e)=>{handleTabs(0)}}>Description</li>
                    <li className="details__tabs-btn"  onClick={(e)=>{handleTabs(1)}}>Deliverty Policy</li>
                    <li className="details__tabs-btn" onClick={(e)=>{handleTabs(2)}}>Customer Reviews</li>
                </ul>
                <div className="details__tab active">{description}</div>
                <div className="details__tab">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>Vivamus a placerat dolor. Proin ut vehicula mauris. Etiam sagittis augue ipsum. Aliquam vestibulum massa nulla, ullamcorper aliquam diam feugiat vel. Fusce porttitor ultrices ante, posuere vehicula lacus tempor eu. Sed et purus et massa mattis aliquet ac vel dolor. Pellentesque eros lectus, placerat nec finibus ac, lobortis eu risus. Donec fringilla metus ligula, sit amet fermentum ex laoreet non - Ribbed and double stitched collar and armholes</p>
                    <p>Curabitur egestas suscipit odio. Nam vitae aliquam dui in laoreet elit. In posuere augue id velit placerat, vitae porttitor leo aliquet. Aenean non ligula sed lorem eleifend aliquam. Morbi posuere faucibus viverra. Proin ullamcorper, lorem lacinia cursus finibus.</p>
                </div>
                <div className="details__tab">
                    {fakeReviews.map((review:Review,index:number)=>(
                        <div key={index} className="details__review">
                            <div className="details__review-heading">
                                <h3>{review.name}</h3>
                                {review.rating > 0.5 ? <FontAwesomeIcon icon={faStar} /> : null}
                                {review.rating > 1.5 ? <FontAwesomeIcon icon={faStar} /> : null}
                                {review.rating > 2.5 ? <FontAwesomeIcon icon={faStar} /> : null}
                                {review.rating > 3.5 ? <FontAwesomeIcon icon={faStar} /> : null}
                                {review.rating > 4.5 ? <FontAwesomeIcon icon={faStar} /> : null}
                            </div>
                            <div className="details__comment">
                                {review.review}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </React.Fragment>
            : <div className="details__suspense"><h2>Choose Product First</h2><Link to="/"><button>Return To Shop</button></Link></div>
        }</React.Fragment>
        </div>
    )
}

export default Details
