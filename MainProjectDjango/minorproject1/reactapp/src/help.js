import React from 'react';
import  './App.css';
import Header from './Header'

class Help extends React.Component {
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
  <div className="App">
        <Header/>
    <h1>Help Desk!</h1>
  
    
      <form>
          <input type = "text" id ="fname" name = "Search Your queries" placeholder ="Search"/>
      </form>
      <div className="body">
      <div className = "container ">
        <div className = " box">
         
          <div className = "content">
            <h3>How to use software?</h3>
            <p>This software is used to detect mask. With the help of log section we can check daily analysis. Proper working of camera is important. </p>
              <input type="submit" onClick= " " value="Read More"></input>
          </div>
        </div>
        <div className = "box">
         
          <div className = "content">
            <h3>What we can do?</h3>
            <p>With this software we can daily and monthly analyze. We can also identify the individuals who are not wearing a mask and save their details. </p>
              <input type="submit" onClick= " " value="Read More"></input>
          </div>
        </div>
        <div className = "box">
          
          <div className = "content">
            <h3>Further queries</h3>
            <p>For further queries you can contact us through contact page and through mail. We try to reach you as soon as possible and resolve your query.</p>
            <input type="submit" onClick= " " value="Read More"></input>
          </div>
        </div>
      </div>
      </div>
    </div>
    
      );
    }
      
  
  }

export default Help;
