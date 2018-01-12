import React, { Component } from 'react';

export default class SearchForm extends React.component {
  constructor(props) {
    super(props);
    this.state = {value = ''};
    this.handleChange = this.handlechange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
      this.setState({value: event.target.value});
  }
  handleSubmit(event){
      //aca no se como poner el fetch para la api
      event.preventDefault();
  }
}
render(){
  return(
    <form className='nav-search-bar' action = '/sites/MLA/search?q=' method = 'GET' onSubmit={this.handleSubmit}>
      <input type= 'text' className = 'nav-search-input' placeholder = 'Nunca dejes de buscar'/>
      <button className = 'nav-search-button' type = 'submit'>
        <img className = 'lupa' src={require('./components/interface/lupa.png')} alt = 'lupa'/>
      </button>
    </form>
  )
};
