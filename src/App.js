import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoFrame from '../src/todoframe';
import ListItem from '../src/list'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 id="todos-title">todos</h1>
          <TodoFrame/>
      </div>
    );
  }
}

export default App;
