import React, { Component } from 'react';
import Header from "./Header";
import './App.css'
class Log extends Component {
  state = {
    todos: [],
    lengths:0,
  };/*    This is where the magic happens*/
    async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api'); // fetching the data from api, before the page loaded
      const todos = await res.json();
      
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
 
    const visits = this.state.todos.length;
    
    return (
  <div  style={{ overflowY: 'scroll', height: 'calc(130vh - 127px)' }}>
    <Header/>
    <table class="table table-bordered table-dark my-tbody">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">WithMask</th>
      <th scope="col">Day</th>
      <th scope="col">Date and Time</th>
    </tr>
  </thead>
  <tbody >
 
         {this.state.todos.map(item => (
          //<div key={item.id}>
            //<h1>{item.day_week}</h1>
          //</div>
          <tr>
              <th scope="row">{item.id}</th>
              <td>{item.with_mask}</td>
              <td>{item.day_week}</td>
              <td>{item.date_time}</td>
          </tr>
        ))}
  </tbody>
        
        </table>
     
  </div>
      
      
    
    );
  }
}

export default Log;