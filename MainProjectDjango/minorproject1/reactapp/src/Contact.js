import React from 'react';
import  './Contact.css';
import Header from './Header'
import emailjs from 'emailjs-com';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_o8ii7qo', 'template_sqksn7l', e.target, 'user_krj5iRmuNZ5LMMmNfrfRV')
      .then((result) => {
          console.log(result.text);
          alert("Your message is sent!");
      }, (error) => {
          console.log(error.text);
      });
  }
      return (
        <div>
        <Header/>
  <div style={{ overflowY: 'scroll', height: 'calc(100vh - 127px)' }} className="App">
      
      <div className="container" >
      <h1>Need some help?</h1>
      <h3>Contact us</h3>
      <form onSubmit={sendEmail}>
        <label>First Name</label>
        <input type = "text" id ="fname" name = "user_name" placeholder ="Your Full Name"
         
        />
        <label>Email</label>
        <input type = "email" id ="email" name = "user_email" placeholder ="Email id"
         
         />
         <label>Your Message</label>
        <textarea name="message" />
        <input type="submit"   value="Submit"></input>
      </form>
      </div>
      <br></br>
      <br></br>
      <p>For further queries contact us on..</p>
      <center><a>varshneytanya16@gmail.com</a></center>
    </div>
    </div>
      );
    }
      
  
