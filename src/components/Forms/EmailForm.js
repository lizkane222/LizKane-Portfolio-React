import React, { useState } from "react";
import emailjs from 'emailjs-com';

const EmailForm=() => {
    (function(){
      emailjs.init("user_1zjWdxZg6yFodwsuNkOVU");
  })();

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_41ays4b', 'sendGmailEmail', e.target, 'user_1zjWdxZg6yFodwsuNkOVU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
          <div className="container">
            <form onSubmit={sendEmail}>
              <div className="col-8 form-group mx-auto">
                <input type="text" className="form-control" placeholder="Name" name="name"/>
              </div>
              <div className="col-8 form-group mx-auto">
                <input type="email" className="form-control" placeholder="Email Address" name="email"/>
              </div>
              <div className="col-8 form-group mx-auto">
                <input type="text" className="form-control" placeholder="Subject" name="subject"/>
              </div>
              <div className="col-8 form-group mx-auto">
                <textarea className="form-control" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
              </div>
              <div className="col-8 form-group mx-auto">
                <input type="submit" className="btn btn-info" value="Send Email"></input>
              </div>
            </form>
          </div>
        </div>
    )
}

export default EmailForm;


// import './ContactUs.css';

// export default function EmailForm() {

//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   }

//   return (
//     <form className="contact-form" onSubmit={sendEmail}>
//       <input type="hidden" name="contact_number" />
//       <label>Your Name</label>
//       <input type="text" name="user_name" />
//       <label>Your Email</label>
//       <input type="email" name="user_email" />
//       <label></label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// }