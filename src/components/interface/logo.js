import React, { Component } from 'react';
import logo from './components/interface/logoml.png';
export default class Logo extends Component {
  render() {
    return (
      <div>
        <img src={logo}/>
      </div>
    );
  }
}
