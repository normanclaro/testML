import React, { Component } from 'react';
import logo from './components/interface/logoml.png';
export default class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="logo">
          <img src={logo}/>
        </div>
      </div>
    );
  }
}
