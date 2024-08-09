import React from 'react'
import log from './img/logo.png'
import { useState } from "react";
import f1 from './img/black s11.jpg'
import f2 from './img/white s11.jpg'
import f3 from './img/black classic s11.jpg'
import f4 from './img/Mahindra-Thar-.jpg'
import f5 from './img/swift.jpg'
import f6 from './img/baleno.jpg'
import f7 from './img/verna.jpg'
import f8 from './img/i20.jpg'
import f9 from './img/thar2.jpg'
import f10 from './img/fortuner.jpg'
import f11 from './img/b swift.jpg'
import f12 from './img/b verna.webp'
import f13 from './img/boloro.jpg'
import f14 from './img/brazza.jpg'
import f15 from './img/seltos.jpg'
import f16 from './img/creata.jpg'


const Cars =({ phoneNumber, message })=> {


  const whatapp = () => {
    const encodedMessage = encodeURIComponent("Hi Sir good evining ");
    const whatsappLink = `https://wa.me/${7742414814}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };

  const [inputValue, setInputValue] = useState('');

  // Handle changes in the input field
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Store the input value in localStorage on button click without erasing previous data
  const saveData = () => {
    // Get the existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem('myInputData')) || [];
    
    // Add the new input value to the array
    const updatedData = [...existingData, inputValue];

    // Store the updated array back in localStorage
    localStorage.setItem('myInputData', JSON.stringify(updatedData));

    // Clear the input field
    setInputValue('');
  };

  const loction = () => {
    // some complex logic here
    window.open("https://maps.app.goo.gl/wLvT7pK76kB3se4z6","_blank")
  };

  const Dail = () => {
    const phoneNumber = "+1234567890";
    if (navigator.userAgent.match(/Mobi/)) {
      // It's a mobile device
      window.location.href = `tel:${phoneNumber}`;
    } else {
      alert("This function is only available on mobile devices.");
    }
  };


  const mail = () => {
    const email = "shaktiyadav635@gmail.com";
    const subject = "Hello from Rental";
    const body = "I wanted to reach out to you regarding car details or somthing else ...";
    const cc = "cc@example.com";
    const bcc = "bcc@example.com";
    
    window.location.href = `mailto:${email}?cc=${encodeURIComponent(cc)}&bcc=${encodeURIComponent(bcc)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  
   
  return (
    <div>


{/* <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={s1} class="d-block w-100" alt="..."/>
    </div>
    
  </div>
</div> */}





<section class="product-section">
       
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
            <h4 class="price">₹5500</h4>
            <i onClick={whatapp}  class="fa-brands fa-square-whatsapp fa-beat"></i>
            </div>
          <div class="product-cart">
            <img src={f2} alt="img"/>
            <span>Mahindra</span>
            <h4>White Scorpio S11</h4>
            <div class="stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <h4 class="price">₹5500</h4>
            <i onClick={whatapp}  class="fa-brands fa-square-whatsapp fa-beat"></i></div>
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
            <i onClick={whatapp}  class="fa-brands fa-square-whatsapp fa-beat"></i></div>
          <div class="product-cart">
            <img src={f4} alt="product img"/>
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
            <i onClick={whatapp}  class="fa-brands fa-square-whatsapp fa-beat"></i></div>
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
            <i onClick={whatapp}  class="fa-brands fa-square-whatsapp fa-beat"></i></div>
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
            <i onClick={whatapp}  class="fa-brands fa-square-whatsapp fa-beat"></i> </div>
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
            <i onClick={whatapp}  class="fa-brands fa-square-whatsapp fa-beat"></i> </div>
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
            <i onClick={whatapp}  class="fa-brands fa-square-whatsapp fa-beat"></i></div>






          <div class="product-cart">
            <img src={f9} alt="product img"/>
            <span>Mahindra</span>
            <h4>Black Thar 4*2</h4>
            <div class="stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <h4 class="price">₹5500</h4>
            <i onClick={whatapp}  class="fa-brands fa-square-whatsapp fa-beat"></i></div>
          <div class="product-cart">
            <img src={f10} alt="product img"/>
            <span>Toyota</span>
            <h4>White fortuner</h4>
            <div class="stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <h4 class="price">₹15000</h4>
            <i onClick={whatapp}  class="fa-brands fa-square-whatsapp fa-beat"></i></div>
          <div class="product-cart">
            <img src={f11} alt="product img"/>
            <span>Maruti Suzuki</span>
            <h4>Black Swift</h4>
            <div class="stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <h4 class="price">₹3000</h4>
            <i onClick={whatapp}  class="fa-brands fa-square-whatsapp fa-beat"></i></div>
          <div class="product-cart">
            <img src={f13} alt="product img"/>
            <span>Mahindra</span>
            <h4>White boloro</h4>
            <div class="stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <h4 class="price">₹5000</h4>
            <i onClick={whatapp}  class="fa-brands fa-square-whatsapp fa-beat"></i></div>
          <div class="product-cart">
            <img src={f15} alt="product imag"/>
            <span>KIA</span>
            <h4> White Seltos</h4>
            <div class="stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <h4 class="price">₹4000</h4>
            <i onClick={whatapp}  class="fa-brands fa-square-whatsapp fa-beat"></i>  </div>
          <div class="product-cart">
            <img src={f14} alt="product img"/>
            <span>Maruti Suzuki</span>
            <h4>White Brazza</h4>
            <div class="stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <h4 class="price">₹4000</h4>
            <i onClick={whatapp}  class="fa-brands fa-square-whatsapp fa-beat"></i></div>
          <div class="product-cart">
            <img src={f12} alt="product img"/>
            <span>Hundai</span>
            <h4>Black Verna 1.6</h4>
            <div class="stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <h4 class="price">₹4800</h4>
            <i onClick={whatapp}  class="fa-brands fa-square-whatsapp fa-beat"></i></div>
          <div class="product-cart">
            <img src={f16} alt="product img"/>
            <span>Hundai</span>
            <h4>White creata</h4>
            <div class="stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <h4 class="price">₹4500</h4>
            <i onClick={whatapp}  class="fa-brands fa-square-whatsapp fa-beat"></i> </div>
          
        </div>
        
      </section>




      <footer className="footer-section">
    <div className="container">
        <div className="footer-cta pt-5 pb-5">
            <div className="row">
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="cta-text" onClick={loction}>
                            <h4 className="footex">Find us</h4>
                            <span className="footex">Near Manipal University jaipur</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <i className="fas fa-phone"></i>
                        <div className="cta-text" onClick={Dail}>
                            <h4 className="footex">Call us</h4>
                            <span>8901636636</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <i className="far fa-envelope-open"></i>
                        <div className="cta-text" onClick={mail}>
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
                                <input className="inco" type="email"  value={inputValue} onChange={handleInputChange} placeholder="Email Address"/>
                                <button id="but" onClick={saveData}><i className="fab fa-telegram-plane"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button  id="button"><i onClick={whatapp} class="fa-brands fa-whatsapp"></i></button>
    
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
      
    </div>
  )
}
export default Cars
