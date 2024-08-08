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

import { useNavigate } from "react-router-dom";

const  Home = ({ phoneNumber, message }) => {
  const navigate =useNavigate();

  const fncar= () =>{
    navigate('/cars');
  };

  
    const whatapp = () => {
      const encodedMessage = encodeURIComponent("Hi Sir good evining ");
      const whatsappLink = `https://wa.me/${7742414814}?text=${encodedMessage}`;
      window.open(whatsappLink, '_blank');
    };
  
        
    
      
    

    return (
     





    <div className="hback">
     <section id="hero">
        <h4>Cars For Rental</h4>
        <h2>Affordable price</h2>
        <h1> All Cars Available</h1>
        <p>save more coupons &amp; up to 5% off!</p>
        <button onClick={fncar}>Book now</button>
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
        <div class="f-box thr">
          <img src={g3} alt="save money"/>
          <h6>Save money</h6>
        </div>
       
        <div class="f-box  ">
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
            <img src={f1} alt="product img"/>
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
            <i onClick={whatapp} class="fa-brands fa-square-whatsapp fa-beat"></i>
            </div>
          <div class="product-cart">
            <img src={f2} alt="product img"/>
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
            <i onClick={whatapp}  class="fa-brands fa-square-whatsapp fa-beat"></i>
          </div>
          <div class="product-cart">
            <img src={f3} alt="product img"/>
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
            <i  onClick={whatapp} class="fa-brands fa-square-whatsapp fa-beat"></i>
            </div>
          <div class="product-cart">
            <img src={f4} alt="product imag"/>
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
            <i onClick={whatapp}  class="fa-brands fa-square-whatsapp fa-beat"></i>
            </div>
          <div class="product-cart">
            <img src={f5} alt="product img"/>
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
            <i onClick={whatapp}  class="fa-brands fa-square-whatsapp fa-beat"></i>
            </div>
          <div class="product-cart">
            <img src={f6} alt="product img"/>
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
            <i onClick={whatapp}  class="fa-brands fa-square-whatsapp fa-beat"></i>
            </div>
          <div class="product-cart">
            <img src={f7} alt="product img"/>
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
            <i onClick={whatapp}  class="fa-brands fa-square-whatsapp fa-beat"></i>
            </div>
          <div class="product-cart">
            <img src={f8} alt="product img"/>
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
            <i onClick={whatapp}  class="fa-brands fa-square-whatsapp fa-beat"></i>
             </div>
          
        </div>
        <button className="butt" onClick={fncar}>Show More</button>
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
            
          </div>
        </div>
      </section>




      <footer className="footer-section">
    <div className="container">
        <div className="footer-cta pt-5 pb-5">
            <div className="row">
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="cta-text">
                            <h4 className="footex">Find us</h4>
                            <span className="footex">Near Manipal University jaipur</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <i className="fas fa-phone"></i>
                        <div className="cta-text">
                            <h4 className="footex">Call us</h4>
                            <span>8901636636</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <i className="far fa-envelope-open"></i>
                        <div className="cta-text">
                            <h4 className="footex">Mail us</h4>
                            <span className="footex">mail@info.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-content pt-5 pb-5">
            <div className="row">
                <div className="col-xl-4 col-lg-4 mb-50">
                    <div className="footer-widget">
                        <div className="footer-logo">
                            <img src={log} class="img-fluid" alt="logo"/>
                        </div>
                        
                    </div>
                </div>
                {/* <div className="col-xl-4 col-lg-4 col-md-6 mb-30  d-xl-flex justify-content-center">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3>Useful Links</h3>
                        </div>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/contact">Contact</a></li>
                              <li><a href="/privacy-policy">Privacy Policy</a></li>
                                <li><a href="/terms">Terms &amp; Conditions</a></li>
                        </ul>
                    </div>
                </div> */}
                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3 className="footex">Subscribe</h3>
                        </div>
                        <div className="footer-text mb-25">
                            <p className="footex">Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                        </div>
                        <div className="subscribe-form">
                            <form action="#" class="ng-pristine ng-valid">
                                <input className="inco" type="text" placeholder="Email Address"/>
                                <button id="but"><i className="fab fa-telegram-plane"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button id="button" onClick={whatapp} ><i class="fa-brands fa-whatsapp ba1" ></i></button>
    
    {/* <div className="copyright-area">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                    <div className="copyright-text">
                        <p>Copyright © 2023, All Right Reserved <a href="https://brightensolutions.com/">Brighten Soluction</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
</footer>
      {/* <footer>
      <div id="footer" >
        <div class="contact">
           <img className="b" src={log} alt=""/>
           <br/>
          <br/> 
          <h3 className="fh">Contact</h3>
          <address>
            <p><b className="fh">Address:</b> Wellington Road, Street 32. San Francisco</p>
            <p><b className="fh">Phone:</b> Wellington Road, Street 32. San Francisco</p>
            <p><b className="fh">Hours</b> 10:00 - 18:00. Mon - Sat</p>
          </address>
          <h3  className="fh">Follow Us</h3>
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
          <h3 className="fh">About</h3>
          <br/> 
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Contact Us</a>
        </div>
        <div class="myaccount ">
          <h3 className="fh">My account</h3>
          <br/> 
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>
        
        
      </div>
    </footer> */}
      </div>
    )
}

export default Home