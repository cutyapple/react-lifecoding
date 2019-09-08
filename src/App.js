import React, { Component } from 'react';
import './App.css';

class Subject extends Component{
  render(){
    return(
      <header>
        <h1>Cuty Apple</h1>
        <p>My RE:ACT Web!</p>
      </header>
    );
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject/>
        Hello!
      </div>
    );
  }
}

export default App;
