import React from 'react'

import s1 from './img/Untitled (4).png'
import s2 from './img/Untitled (4).png'
import s3 from './img/Untitled (4).png'

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

export default function Cars() {
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






          <div class="product-cart">
            <img src={f9} alt="product image"/>
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
            <a href="#"><i class="fa-solid fa-cart-shopping buy-icon" aria-hidden="true"></i></a>
          </div>
          <div class="product-cart">
            <img src={f10} alt="product image"/>
            <span>Toyota</span>
            <h4>White fortuner</h4>
            <div class="stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <h4 class="price">₹10000</h4>
            <a href="#"><i class="fa-solid fa-cart-shopping buy-icon" aria-hidden="true"></i></a>
          </div>
          <div class="product-cart">
            <img src={f11} alt="product image"/>
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
            <a href="#"><i class="fa-solid fa-cart-shopping buy-icon" aria-hidden="true"></i></a>
          </div>
          <div class="product-cart">
            <img src={f13} alt="product image"/>
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
            <a href="#"><i class="fa-solid fa-cart-shopping buy-icon" aria-hidden="true"></i></a>
          </div>
          <div class="product-cart">
            <img src={f15} alt="product image"/>
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
            <a href="#"><i class="fa-solid fa-cart-shopping buy-icon" aria-hidden="true"></i></a>
          </div>
          <div class="product-cart">
            <img src={f14} alt="product image"/>
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
            <a href="#"><i class="fa-solid fa-cart-shopping buy-icon" aria-hidden="true"></i></a>
          </div>
          <div class="product-cart">
            <img src={f12} alt="product image"/>
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
            <a href="#"><i class="fa-solid fa-cart-shopping buy-icon" aria-hidden="true"></i></a>
          </div>
          <div class="product-cart">
            <img src={f16} alt="product image"/>
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
            <a href="#"><i class="fa-solid fa-cart-shopping buy-icon" aria-hidden="true"></i></a>
          </div>
          
        </div>
        
      </section>
      
    </div>
  )
}
