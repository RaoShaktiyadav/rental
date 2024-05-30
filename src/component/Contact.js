import React from "react";

function Contact() {
    return (
       <div>
        <div className="ca"></div>
        <h1 className="ce">Write us</h1>
        <div className="cd">

           

            <div className="cb">
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
            </div>
            <div className="cc"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1779.912032365123!2d75.5673177216141!3d26.845547599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c490005db2a95%3A0x97cede106e918e07!2sShree%20Shyam%20Car%20Rental!5e0!3m2!1sen!2sin!4v1717060549754!5m2!1sen!2sin"/></div>


        </div>

       </div>
    );
}

export default Contact;