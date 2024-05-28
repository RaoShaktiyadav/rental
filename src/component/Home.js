import React from "react";

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
import f5 from './img/white s11.jpg'
import f6 from './img/white s11.jpg'
import f7 from './img/white s11.jpg'
import f8 from './img/white s11.jpg'

function Home() {
    return (
    <div className="hback">
     <section id="hero">
        <h4>Cars For Rental</h4>
        <h2>Affordable price</h2>
        <h1>On all Cars</h1>
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
        <p>All Types Cars Top Models</p>
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
            <span>adidas</span>
            <h4>Cartoon Astronaut T-Shirts</h4>
            <div class="stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <h4 class="price">$78</h4>
            <a href="#"><i class="fa-solid fa-cart-shopping buy-icon" aria-hidden="true"></i></a>
          </div>
          <div class="product-cart">
            <img src={f6} alt="product image"/>
            <span>adidas</span>
            <h4>Cartoon Astronaut T-Shirts</h4>
            <div class="stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <h4 class="price">$78</h4>
            <a href="#"><i class="fa-solid fa-cart-shopping buy-icon" aria-hidden="true"></i></a>
          </div>
          <div class="product-cart">
            <img src={f7} alt="product image"/>
            <span>adidas</span>
            <h4>Cartoon Astronaut T-Shirts</h4>
            <div class="stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <h4 class="price">$78</h4>
            <a href="#"><i class="fa-solid fa-cart-shopping buy-icon" aria-hidden="true"></i></a>
          </div>
          <div class="product-cart">
            <img src={f8} alt="product image"/>
            <span>adidas</span>
            <h4>Cartoon Astronaut T-Shirts</h4>
            <div class="stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <h4 class="price">$78</h4>
            <a href="#"><i class="fa-solid fa-cart-shopping buy-icon" aria-hidden="true"></i></a>
          </div>
        </div>
      </section>

   
      </div>
    )
}

export default Home;