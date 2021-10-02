import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className="footer">
            <div className="foorer__col">
                <h2>Salehub</h2>
                <p>We’re available by phone +123-456-789</p>
                <p>info@example.com</p>
                <p>Monday till Friday 10 to 6 EST</p>
                <img src={"/paypal.png"} alt="" />
            </div>
            <div className="foorer__col">
                <h3>About Us</h3>
                <ul>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Contact us</Link></li>
                    <li><Link to="#">Factories</Link></li>
                    <li><Link to="#">Careers</Link></li>
                    <li><Link to="#">Help and advice</Link></li>
                    <li><Link to="#">Shipping & Returns</Link></li>
                    <li><Link to="#">Terms and conditions</Link></li>
                    <li><Link to="#">Refund Policy</Link></li>
                </ul>
            </div>
            <div className="foorer__col">
                <h3>Our Shop</h3>
                <ul>
                    <li><Link to="#">New Arrivals</Link></li>
                    <li><Link to="#">Top Trending</Link></li>
                    <li><Link to="#">Autumn Collection</Link></li>
                    <li><Link to="#">Back in Stock</Link></li>
                    <li><Link to="#">Bikini Tops</Link></li>
                    <li><Link to="#">Bikini Bottoms</Link></li>
                    <li><Link to="#">Swimwear</Link></li>
                    <li><Link to="#">Denim Collection</Link></li>
                </ul>
            </div>
            <div className="foorer__col">
                <h3>Newsletter</h3>
                <p>Receive our weekly newsletter. For dietary content, fashion insider and the best offers.</p>
                <form action="">
                    <div className="footer__field">
                        <input type="text" />
                        <button className="footer__btn">JOIN</button>
                    </div>
                </form>
                <div className="footer__social">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-pinterest"></i>              
                </div>
            </div>
        </div>
    )
}

export default Footer