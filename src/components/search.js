import React, { Component } from 'react';
import busqueda from './search.js';


export default class searchNav extends React.Component {
	constructor(props) {
  	super(props);
 		 this.state={items:['id','body']};
  }
  componentDidMount(){
  	fetch(`http://jsonplaceholder.typicode.com/posts`)
 		.then (result => result.json())
    .then (items => this.setState({items}))
  }
  render() {
  	return(
    <div className='listJson'>
    	<ul>
          {this.state.items.length ?
          	this.state.items.map (item => <li key={item.id}> {item.body} </li>)
            : <li> Cargando... </li>
          }
      </ul>
    </div>
     )
  }
};
