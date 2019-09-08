import React, { Component } from 'react';
import Subject from './components/Subject'; 
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        subject:{title:'CutyApple', sub:'RE:ACT!'},
        contents:[
            {id:1, title:'HTML', desc:'first'},
            {id:2, title:'CSS', desc:'second'},
            {id:3, title:'JS', desc:'third'}
        ]
      }
    } 
    render(){
      return (
        <div>
          <Subject data={this.state.contents}/>
          Hello!
        </div>
      );
    }
}

export default App;
