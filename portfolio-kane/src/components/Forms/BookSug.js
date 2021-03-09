import React, {useState} from "react";
import emailjs from 'emailjs-com';


const BookSug= () => {
    const [value, setValue] = useState('');
    
    // const handleSubmit= (e) => {
    //     e.preventDefault();
    //     if(!value) return;
    //     addTodo(value);
    //     setValue('');
    // }

    (function(){
        emailjs.init("user_1zjWdxZg6yFodwsuNkOVU");
    })();
    const [submitted, setSubmitted] = useState(false)
    const [checked, setChecked] = useState(true)
    
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_41ays4b', 'book_suggestion', e.target, 'user_1zjWdxZg6yFodwsuNkOVU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        setSubmitted(true)
    }




    return(
        <div className="col-lg-3 mx-auto" >
          <div className="card mt-2 mx-auto p-4 grey-very-dark2 box-shadow emailCard">
              <div className="card-body">
                
                <div className="container">
                  <div className="text-center mt-5">
                    <h2 className="cardTitle">Suggest A Book</h2>
                    <hr/>
                  </div>

                  <form onSubmit={sendEmail} id="book-form" enctype="multipart/form-data" method="post">
                    <div className="controls">
                
                      <div className="formRow">
                        <div className="col-md-2" id="formTitle">
                          <div className="form-group formGroup">
                              <label className="formLabel" for="bookTitle">Book Title</label>
                              <input id="bookTitle" type="text" className="form-control" placeholder="Hmm y-a-t'il un livre souvenire?" name="book_title"/>
                          </div>
                        </div>
                        <div className="col-md-2" id="formAuthor">
                          <div className="form-group formGroup">
                            <label className="formLabel" for="book_author">Author</label>
                            <input id="book_author" type="text" name="book_author" className="form-control" placeholder="Connais-je des auteurs... peut être non peut être oui..." />
                          </div>
                        </div>
                      </div>

                      <div className="formRow">
                        {checked ?
                    <>
                        <input type="radio" id="radioEmailAddress" checked="checked">Leave Email</input>
                        <div className="col-md-2" id="formEmailAddress">
                          <div className="form-group formGroup">
                            <label className="formLabel" for="theirEmail">Your Email Address</label>
                            <input type="email" id="theirEmail" className="form-control" placeholder="If you'd like to leave your email address" name="their_email"/>
                          </div>
                        </div>
                    </>  
                    :
                    <>
                        <input type="radio" id="radioTheirName" checked="checked">Leave Name</input>
                        <div className="col-md-2" id="formTheirName">
                          <div className="form-group formGroup">
                            <label className="formLabel" for="theirName">Your Name</label>
                            <input type="text" id="theirName" className="form-control" placeholder="If you'd like to leave your email address" name="their_name"/>
                          </div>
                        </div>
                    </>    
                }

                        <div className="col-md-3" id="formComment">
                          <div className="form-group formGroup">
                            <label className="formLabel" for="comment">💭</label>
                            <select id="comment" name="comment" className="form-control">
                            {/* <select id="subject" name="subject" className="form-control" required="required" id="subjectPlaceholder" data-error="Please specify your inquiry."> */}
                              <option value=""  selected disabled>🆒 ❤</option>
                              <option>👊🏻 Get at it!</option>
                              <option>👏🏼 Hyped!</option>
                              <option>👍🏽 Keep going!</option>
                              <option>💪🏾 Books += Muscles</option>
                              <option>🤙🏿 Stay ss-coool</option>
                              <option>🤓 Nerd Herd</option>
                              <option>📚 Liberté Par Livres</option>
                              <option>🤜 🤛 Feelin' This</option>
                              <option>Let me know when you've read my suggested book!</option>
                              <option>I'm going to start reading more too, let's have a book club.</option>
                              <option>I'm interested in how ____ has impacted you.</option>
                              <option>I'm feeling inspired to read!</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* <div className="formRow"> */}
                        <div className="col-md-3" id="formBookMessage">
                          <div className="form-group formGroup">
                            {/* <label className="formLabel" for="bookMessage">Let me know why you suggest this book & if you want me to get back in contact with you</label> */}
                            <textarea id="bookMessage" className="form-control" cols="20" rows="5" placeholder="Let me know why you suggest this book & if you want me to get back in contact with you" name="book_message" ></textarea>
                          </div>
                        </div>
                        <div className="col-md-3"> 
                          <div className="form-group float-left">
                            {/* <input type="file" name="uploaded_file"> */}
                            <input type="file" name="uploaded_book_file" id="uploaded_book_file"></input>
                          </div><br/>
                          
                          <div className="form-group float-right">
                            <input type="submit" className="btn btn-info btn-primary" value="Recomend Book"></input>
                          </div>
                            {submitted===true ? 
                            <>  
                            <p id="submitBookShow" className="yellowText">Thanks for your suggestion!</p>
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



        // <form onSubmit={handleSubmit} className="comment-form">
        //     <input 
        //     type="text" 
        //     className="input" 
        //     value={value} 
        //     onChange={e => setValue(e.target.value)} 
        //     placeholder="Know a book that should be on this list?"/>
        //     <input 
        //     type="text" 
        //     className="input" 
        //     value={value} 
        //     onChange={e => setValue(e.target.value)} 
        //     placeholder="Know a book that should be on this list?"/>
        //     <input 
        //     type="text" 
        //     className="input" 
        //     value={value} 
        //     onChange={e => setValue(e.target.value)} 
        //     placeholder="Know a book that should be on this list?"/>
        //     <input 
        //     type="text" 
        //     className="input" 
        //     value={value} 
        //     onChange={e => setValue(e.target.value)} 
        //     placeholder="Know a book that should be on this list?"/>




        // </form>
    )
}

export default BookSug;