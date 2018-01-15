import React, { Component } from 'react';
import header from './header.js'
import SearchForm from './form.js'
import logo from './interface/logoml.png'
import lupa from './interface/lupa.png'

export default class Header extends Component{
  render(){
    return(
      <div className='App'>
          <img className = 'logoml' src = {require('./interface/logoml.png')} alt = 'logo'/>
          <SearchForm />
      </div>
    );
  }
}
