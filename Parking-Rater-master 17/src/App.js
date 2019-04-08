import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './firebase.js';


// this is the top level component for our 1 page app. This can all be converted
//to an android app simply using React Native
class App extends Component {

  render() {
    return (
      <div>
      <p>Hello, World!</p>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello World
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div></div>
    );
  }
  
}

export default App;
