import React from "react";

import g1 from './img/f1.png'
import g2 from './img/f2.png'
import g3 from './img/f3.png'
import g4 from './img/f4.png'
import g5 from './img/f5.png'
import g6 from './img/f6.png'

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
   
      </div>
    )
}

export default Home;