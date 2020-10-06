import React from 'react';
import  './Contact.css';
import Header from './Header'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      fname :' ',
      lname:' ',
      email:' ',
      message:' ',
    }
  }
  handleFormSubmit(Event){
    
    Event.preventDefault();
    console.log(this.state);
}



    render() {
      return (
        <div>
        <Header/>
  <div style={{ overflowY: 'scroll', height: 'calc(100vh - 127px)' }} className="App">
      
      <div className="container">
      <h1>Need some help?</h1>
      <h3>Contact us</h3>
      <form>
        <label>First Name</label>
        <input type = "text" id ="fname" name = "firstname" placeholder ="Your First Name"
         
        />
        <label>Last Name</label>
        <input type = "text" id ="lname" name = "lastname" placeholder ="Your Last Name"
          
         />
        <label>Email</label>
        <input type = "email" id ="email" name = "email" placeholder ="Email id"
         
         />
        <label>Subject</label>
        <textarea id="subject" name = "subject" placeholder="Write Something.." ></textarea>
          
        <input type="submit" onClick={e=>this.handleFormSubmit(e)} value="Submit"></input>
      </form>
      </div>
      <br></br>
      <br></br>
      <p>For further queries contact us on..</p>
      <center><a href="varshneytanya16@gmail.com">varshneytanya16@gmail.com</a></center>
    </div>
    </div>
      );
    }
      
  
  }

export default Contact;