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

    {/*<div className="container" id="emailContainer"> */}
      {/* <div className="row"> */}
  return(
        <div className="col-lg-5 mx-auto">
          <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                
                <div className="container">
                <div className="text-center mt-5">
                  <h2 className="cardTitle">Get in touch</h2>
                </div>
                  <form onSubmit={sendEmail} id="contact-form" role="form">
                    <div className="controls">

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                              <label for="name">Your Name</label>
                              <input id="name" type="text" className="form-control" placeholder="Name" name="name" data-error="Name is required."/>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group">
                                <label for="company_name">Company Name</label>
                                <input id="company_name" type="text" name="company_name" className="form-control" placeholder="Company Name" />
                              </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="email" className="">Your Email Address</label>
                            <input type="email" className="form-control" placeholder="Email Address" name="email" data-error="Valid email is required."/>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label for="subject">Please specify the subject of your inquiry</label>
                              <select id="subject" name="subject" className="form-control" required="required" data-error="Please specify your inquiry.">
                                <option value="" selected disabled>--Select Your Inquiry--</option>
                                <option>Request quote for project</option>
                                <option>Request a virtual meeting</option>
                                <option>Interested in hiring / contract</option>
                                <option>Interested in professional mentorship</option>
                                <option>Interested in collaborative work</option>
                                <option>Other</option>
                              </select>

                            </div>
                          </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" className="form-control" cols="30" rows="8" placeholder="Write your message here." rows="7" required="required"  name="message" data-error="Please, include a message."></textarea>
                          </div>
                        </div>
                        <div className="col-md-12"> 
                          <div className="form-group">
                            <input type="submit" className="btn btn-info btn-primary" value="Send Email"></input>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
  )
}

export default EmailForm;
{/* </div> */}
{/* </div> */}


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