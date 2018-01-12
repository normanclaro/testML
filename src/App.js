import React, { Component } from 'react';
import './App.css';
import {header} from './components/header.js';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      main: []
    };
}
  render() {
    return (
      <div>
        <header />
      </div>
    );
  }
}




export default App;
