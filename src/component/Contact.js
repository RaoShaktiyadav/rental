import React from "react";
import { useState } from "react";
import log from './img/logo.png'
import emailjs from 'emailjs-com'

const Contact =({ phoneNumber, message })=> {


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

   const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
    }

    // Send email using EmailJS
    emailjs.send(
      'service_6ep6buc',         // Replace with your EmailJS service ID
      'template_9fha569',        // Replace with your EmailJS template ID
      formData,
      'wO9M4fHHb02cXxFOl'             // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus('Feedback sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, (err) => {
      console.error('FAILED...', err);
      setStatus('Failed to send feedback. Please try again later.');
    });
  };
   
  const loction = () => {
    // some complex logic here
    window.open("https://maps.app.goo.gl/wLvT7pK76kB3se4z6","_blank")
  };

  const Dail = () => {
    const phoneNumber ="+918901636636";
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
        <div className="ca"></div>
        <h1 className="ce">Write us</h1>
        <div className="cd">

           
        <div className="cb"> 
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Send Feedback</button>
      </form>
      {status && <p>{status}</p>}
    </div>
            {/* <div className="cb">
                <label>Name</label>
                <br/>
              <input type="text"   />
              <br/>
              <lable>E-mail</lable> 
              <br/>
              <input type="email"    />
              <br/>
              <lable>Write your quaery</lable>
              <br/>
              <textarea></textarea>
              <br/>
              <button className="cf">Submit</button>
            </div> */}
            <div className="cc"><iframe title="_blank" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1779.912032365123!2d75.5673177216141!3d26.845547599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c490005db2a95%3A0x97cede106e918e07!2sShree%20Shyam%20Car%20Rental!5e0!3m2!1sen!2sin!4v1717060549754!5m2!1sen!2sin"/></div>


        </div>

        <section>


        </section>

        {/* <section class="faq_needhelp" id="faq_needhelp">
				<div class="section">
					<div class="container">
						<div class="faq_ttl"></div>
						<div class="faq_crfg">
	<ul>
		<li><i class="spriteFaq in"></i><span>(IND)</span> <a class="dialEvent" href="tel:1800-41-99099">1800-41-99099</a></li>
	</ul>                        
	<p>WRITE TO US AT, <span> <b><a class="emailEvent" href="mailto:services@99acres.com">services@99acres.com</a></b></span></p>
	<a class="wapbtn whatsAppEvent" href="https://web.whatsapp.com/send/?phone=918826821122&amp;text=Hi" target="_blank"><i class="spriteFaq"></i> WHATSAPP US</a>
	<div class="calbtn callbackPop callUsEvent"><i class="spriteFaq"></i> CALL ME BACK</div>
	<div class="otrcnt"><i class="spriteFaq glb"></i><span class="phn">INTERNATIONAL USERS, CALL <span>  <b><a class="dialEvent" href="tel:+91-120-6637501">+91-120-6637501</a></b></span></span><i class="spriteFaq arw"></i>
		
	</div>
	<span class="txt">Please call us at <a class="dialEvent" href="tel:1800-41-99099">1800-41-99099</a> (09:30 AM to 06:30 PM, Monday to Sunday) or write to us at <a class="emailEvent" href="mailto:services@99acres.com">services@99acres.com</a></span>
</div>					</div>
				</div>
			</section> */}

       










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
    <button  id="button" onClick={whatapp}><i class="fa-brands fa-whatsapp"></i></button>
    
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
    );
}

export default Contact;