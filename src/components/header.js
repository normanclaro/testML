import React, { Component } from 'react';
import Header from './components/header.js';
export default class Header extends React.Component{
  render(){
    return(
      <header className = 'App' >
        <div>
          <img className = 'logoml' src = {require('./components/interface/logoml.png')} alt = 'logo'/>
        </div>
      </header>
    );
  }
}
