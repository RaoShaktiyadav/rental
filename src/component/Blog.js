import React from 'react'
import log from './img/logo.png'
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
      <img className='b1' src={b1} alt='img' />
       </section>

  <section id="blog">
      <div class="blog-box">
          <div class="blog-img">
              <img src={c1} alt=""/>
          </div>
          <div class="blog-details">
              <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
              <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies</p>
              {/* <a href="">CONTINUE READING</a> */}
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
              {/* <a href="">CONTINUE READING</a> */}
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
              {/* <a href="">CONTINUE READING</a> */}
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
              {/* <a href="">CONTINUE READING</a> */}
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
              {/* <a href="">CONTINUE READING</a> */}
          </div>
          <h1>10/03</h1>
      </div>
  </section>



  {/* <section id="pagination" class="section-p1">
      <a href="">1</a>
      <a href="">2</a>
      <a href=""><i class="fa-solid fa-arrow-right-long"></i></a>
  </section> */}

  



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
    <button  id="button"><i class="fa-brands fa-whatsapp"></i></button>
    
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
