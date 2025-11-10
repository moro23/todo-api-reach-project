// src/App.js

// Import React and the Component class
import React, { Component } from 'react';
import axios from 'axios'; 


import './App.css';


// Define the App component as a class
class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      todos: []
    };
  
  }

  componentDidMount() {
    this.getTodos();
  }
 
  getTodos() {
    axios
      .get('http://127.0.0.1:8000/apis/')
      .then(res => {
        this.setState({todos: res.data});
      })
      .catch(err => {
        console.log(err);
      })
  }

  // The render method is required for class components and returns what gets displayed
  render() {
    return (
      <div>
        {/* We map over the 'todos' array in our state to display each one */}
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

// Export the App component so it can be used in other files (like index.js)
export default App;