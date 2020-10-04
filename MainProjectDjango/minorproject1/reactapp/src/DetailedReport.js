import React, { Component } from 'react';

class Detail extends Component {
  state = {
    todos: []
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
    return (
      <div>
        hello
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h1>{item.day_week}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default Detail;