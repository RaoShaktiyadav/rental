import React from "react";
import log from './img/logo.png'
import g1 from './img/f1.png'
import g2 from './img/f2.png'
import g3 from './img/f3.png'
import g4 from './img/f4.png'
import g5 from './img/f5.png'
import g6 from './img/f6.png'

import f1 from './img/black s11.jpg'
import f2 from './img/white s11.jpg'
import f3 from './img/black classic s11.jpg'
import f4 from './img/Mahindra-Thar-.jpg'
import f5 from './img/swift.jpg'
import f6 from './img/baleno.jpg'
import f7 from './img/verna.jpg'
import f8 from './img/i20.jpg'

function Home() {
    return (
    <div className="hback">
     <section id="hero">
        <h4>Cars For Rental</h4>
        <h2>Affordable price</h2>
        <h1> All Cars Available</h1>
        <p>save more coupons &amp; up to 5% off!</p>
        <button>Book now</button>
      </section>
      


      <section id="features" class="section-p1">
        <div class="f-box">
          <img src={g1} alt="free shipping"/>
          <h6>Home Pickup</h6>
        </div>
        <div class="f-box">
          <img src={g2} alt="online order"/>
          <h6>Online Booking</h6>
        </div>
        <div class="f-box">
          <img src={g3} alt="save money"/>
          <h6>Save money</h6>
        </div>
        <div class="f-box">
          <img src={g4} alt="promotions"/>
          <h6>Promotions</h6>
        </div>
        <div class="f-box">
          <img src={g5} alt="happy sell"/>
          <h6>Happy Coustmer</h6>
        </div>
        <div class="f-box">
          <img src={g6} alt="24/7 support"/>
          <h6>24/7 Support</h6>
        </div>
      </section>


      <section class="product-section">
        <h1 className="h1">Available Cars</h1>
        <p>All Types Cars Top Model</p>
        <div class="pro-collection">
          <div class="product-cart">
            <img src={f1} alt="product image"/>
            <span>Mahindra</span>
            <h4>Black Scorpio S11</h4>
            <div class="stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <h4 class="price">₹5000</h4>
            <a href="#"><i class="fa-solid fa-cart-shopping buy-icon" aria-hidden="true"></i></a>
          </div>
          <div class="product-cart">
            <img src={f2} alt="product image"/>
            <span>Mahindra</span>
            <h4>White Scorpio S11</h4>
            <div class="stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <h4 class="price">₹5000</h4>
            <a href="#"><i class="fa-solid fa-cart-shopping buy-icon" aria-hidden="true"></i></a>
          </div>
          <div class="product-cart">
            <img src={f3} alt="product image"/>
            <span>Mahindra</span>
            <h4>Black classic Scorpio S11</h4>
            <div class="stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <h4 class="price">₹5500</h4>
            <a href="#"><i class="fa-solid fa-cart-shopping buy-icon" aria-hidden="true"></i></a>
          </div>
          <div class="product-cart">
            <img src={f4} alt="product image"/>
            <span>Mahindra</span>
            <h4>Black Thar 4*4</h4>
            <div class="stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <h4 class="price">₹6000</h4>
            <a href="#"><i class="fa-solid fa-cart-shopping buy-icon" aria-hidden="true"></i></a>
          </div>
          <div class="product-cart">
            <img src={f5} alt="product image"/>
            <span>Maruti Suzuki</span>
            <h4> White Swift</h4>
            <div class="stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <h4 class="price">₹2500</h4>
            <a href="#"><i class="fa-solid fa-cart-shopping buy-icon" aria-hidden="true"></i></a>
          </div>
          <div class="product-cart">
            <img src={f6} alt="product image"/>
            <span>Maruti Suzuki</span>
            <h4>Silver Baleno</h4>
            <div class="stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <h4 class="price">₹3000</h4>
            <a href="#"><i class="fa-solid fa-cart-shopping buy-icon" aria-hidden="true"></i></a>
          </div>
          <div class="product-cart">
            <img src={f7} alt="product image"/>
            <span>Hundai</span>
            <h4>White Verna 1.6</h4>
            <div class="stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <h4 class="price">₹4800</h4>
            <a href="#"><i class="fa-solid fa-cart-shopping buy-icon" aria-hidden="true"></i></a>
          </div>
          <div class="product-cart">
            <img src={f8} alt="product image"/>
            <span>Hundai</span>
            <h4>White i20 Asta</h4>
            <div class="stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <h4 class="price">₹3000</h4>
            <a href="#"><i class="fa-solid fa-cart-shopping buy-icon" aria-hidden="true"></i></a>
          </div>
          
        </div>
        <button className="butt">Show More</button>
      </section>

   


      <section id="banners" class="section-p1">
        <div class="big-banners">
          <div class="big-banners-1">
            <h4>Crazy Deals</h4>
            <h2>Get 10% off on one month Booking</h2>
            <span>Like new condition cars on rent</span>
            <button class="banner-btn">Check here</button>
          </div>
          <div class="big-banners-2">
            <h4>Daily Deals</h4>
            <h2>Get 15% off on 10 days Booking</h2>
            <span>Clean and hygienic</span>
            <button class="banner-btn">Collection</button>
          </div>
        </div>
        <div class="small-banners">
          <div class="small-banners-1">
            <h2 className="a">FOR MORE OFFERS</h2>
            <h5>Check daily our website</h5>
          </div>
          <div class="small-banners-2">
            <h2  className="a">FOLLOW US ON SOCIAL MEDIA</h2>
            <h5>Instagram</h5>
          </div>
          <div class="small-banners-3">
            <h2  className="a">CARS FOR RENT</h2>
            <h5></h5>
          </div>
        </div>
      </section>





      <footer>
      <div id="footer">
        <div class="contact">
           <img className="b" src={log} alt=""/>
           <br/>
          <br/> 
          <h3>Contact</h3>
          <address>
            <p><b>Address:</b> Wellington Road, Street 32. San Francisco</p>
            <p><b>Phone:</b> Wellington Road, Street 32. San Francisco</p>
            <p><b>Hours</b> 10:00 - 18:00. Mon - Sat</p>
          </address>
          <h3>Follow Us</h3>
          <br/> 
          <div class="socials">
            <a href="#"><i class="fa-brands fa-facebook-square" aria-hidden="true"></i></a>
            <a href="#"><i class="fa-brands fa-youtube" aria-hidden="true"></i></a>
            <a href="#"><i class="fa-brands fa-telegram" aria-hidden="true"></i></a>
            <a href="#"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
            <a href="#"><i class="fa-brands fa-twitter" aria-hidden="true"></i></a>
          </div>
        </div>
        <div class="about">
          <h3>About</h3>
          <br/> 
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Contact Us</a>
        </div>
        <div class="myaccount ">
          <h3>My account</h3>
          <br/> 
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>
        
        
      </div>
    </footer>
      </div>
    )
}

export default Home;