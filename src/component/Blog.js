import React from 'react'
import b1 from './img/b1.jpg';
import c1 from './img/i20.jpg';
import c2 from './img/i20.jpg';
import c3 from './img/i20.jpg';
import c4 from './img/i20.jpg';
import c5 from './img/i20.jpg';

export default function Blog() {
  return (
    <div>
    <section id="page-header" class="blog-header">
      <img className='b1' src={b1} />
       </section>

  <section id="blog">
      <div class="blog-box">
          <div class="blog-img">
              <img src={c1} alt=""/>
          </div>
          <div class="blog-details">
              <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
              <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies</p>
              <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
      </div>
      <div class="blog-box">
          <div class="blog-img">
              <img src={c2} alt=""/>
          </div>
          <div class="blog-details">
              <h4>How to Style a Quiff</h4>
              <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies</p>
              <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/04</h1>
      </div>
      <div class="blog-box">
          <div class="blog-img">
              <img src={c3} alt=""/>
          </div>
          <div class="blog-details">
              <h4>Must-Have Skater Girl Items </h4>
              <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies</p>
              <a href="#">CONTINUE READING</a>
          </div>
          <h1>12/01</h1>
      </div>
      <div class="blog-box">
          <div class="blog-img">
              <img src={c4} alt=""/>
          </div>
          <div class="blog-details">
              <h4>Runway-Inspired Trends</h4>
              <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies</p>
              <a href="#">CONTINUE READING</a>
          </div>
          <h1>16/01</h1>
      </div>
      <div class="blog-box">
          <div class="blog-img">
              <img src={c5} alt=""/>
          </div>
          <div class="blog-details">
              <h4>AW20 Meanswear Trends</h4>
              <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies</p>
              <a href="#">CONTINUE READING</a>
          </div>
          <h1>10/03</h1>
      </div>
  </section>



  <section id="pagination" class="section-p1">
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#"><i class="fa-solid fa-arrow-right-long"></i></a>
  </section>

  <section id="newsletter" class="section-p1 section-m1" className='ab'>
      <div class="newtext" >
          <h4>Sign Up For Newsletters</h4>
          <p >Get E-mail updates about our latest shop and <span>special offers.</span></p>
      </div>
      <div class="form">
          <input type="text" placeholder="Your email address"/>
          <button class="normal">Sign Up</button>
      </div>
  </section>
  </div>
  )
}
