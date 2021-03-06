import React, { useState } from "react";
import emailjs from 'emailjs-com';


const EmailForm=() => {
  
  (function(){
    emailjs.init("user_1zjWdxZg6yFodwsuNkOVU");
  })();
  const [submitted, setSubmitted] = useState(false)
  

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_41ays4b', 'sendGmailEmail', e.target, 'user_1zjWdxZg6yFodwsuNkOVU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        setSubmitted(true)
    }

    
    
  return(
        <div className="col-lg-5 mx-auto" id="cardFormEmail">
          {/* <div className="card mt-2 mx-auto p-4 grey-very-dark2 box-shadow emailCard"> */}
          <div className="card mt-2 mx-auto p-4 grey-dark2 box-shadow emailCard">
              <div className="card-body">
                
                <div className="container">
                  <div className="text-center mt-5">
                    <h2 className="cardTitle textShadow">Get in touch</h2>
                    <hr/>
                  </div>

                  <form onSubmit={sendEmail} id="contact-form" enctype="multipart/form-data" method="post">
                    <div className="controls">
                
                      <div className="formRow">
                        <div className="col-md-5" id="formName">
                          <div className="form-group formGroup">
                              <label className="formLabel textShadow" for="name">Your Name</label>
                              <input id="name" type="text" className="form-control" placeholder="Name" name="name" data-error="Name is required."/>
                          </div>
                        </div>
                        <div className="col-md-5" id="formCompany">
                          <div className="form-group formGroup">
                            <label className="formLabel textShadow" for="company_name">Company Name</label>
                            <input id="company_name" type="text" name="company_name" className="form-control" placeholder="Company Name" />
                          </div>
                        </div>
                      </div>

                      <div className="formRow">
                        <div className="col-md-5" id="formEmail">
                          <div className="form-group formGroup">
                            <label className="formLabel textShadow" for="email">Email Address</label>
                            <input type="email" className="form-control" placeholder="Email Address" name="email" data-error="Valid email is required."/>
                          </div>
                        </div>

                        <div className="col-md-7" id="formSubject">
                          
                          <div className="form-group formGroup">
                            <label className="formLabel textShadow" for="subject">Subject of inquiry</label>
                            <select id="subject" name="subject" className="form-control" required="required"  data-error="Please specify your inquiry.">
                            {/* <select id="subject" name="subject" className="form-control" required="required" id="subjectPlaceholder" data-error="Please specify your inquiry."> */}
                              <option value=""  selected disabled>--Select Your Inquiry--</option>
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

                      {/* <div className="formRow"> */}
                        <div className="col-md-12" id="formMessage">
                          <div className="form-group formGroup">
                            {/* <label className="formLabel" for="message">Message</label> */}
                            <textarea id="message" className="form-control" cols="30" rows="8" placeholder="Write your message here." required="required"  name="message" data-error="Please, include a message."></textarea>
                          </div>
                        </div>
                        <div className="col-md-12"> 
                          <div className="form-group float-left" id="upload-file">
                            {/* <input type="file" name="uploaded_file"> */}
                            <input type="file" name="uploaded_file" id="uploaded_file"></input>
                          </div><br/>
                          
                          <div className="form-group float-right">
                            <input type="submit" className="btn btn-info btn-primary" style={{"text-shadow":"0px 0px 5px rgb(25,25,25)"}} value="Send Email"></input>
                          </div>
                            {submitted===true ? 
                            <>  
                            <p id="submitShow" className="blueText textShadow">Thank you for your submission. <br/>I'll get back to you shortly.</p>
                            </>:[]
                          }
                        </div>
                      {/* </div> */}

                    </div>
                  {/* </div> */}
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