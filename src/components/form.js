import React, { Component } from 'react';
import searchForm from './form.js'
import logo from './interface/logoml.png'
import lupa from './interface/lupa.png'

export default class SearchForm extends Component {
render(){
  return(
    <form className='nav-search-bar' action = '/sites/MLA/search?q=' method = 'GET' onSubmit={this.handleSubmit}>
      <input type= 'text' className = 'nav-search-input' placeholder = 'Nunca dejes de buscar'/>
      <button className = 'nav-search-button' type = 'submit'>
        <img className = 'lupa' src={require('./interface/lupa.png')} alt = 'lupa'/>
      </button>
    </form>
    )
  }
}
