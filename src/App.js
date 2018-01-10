import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <header className="App" >
      <div>
        <img className="logoml" src={require('./components/interface/logoml.png')} alt="logo"/>
      </div>
      <form className="nav-search-bar" action="/sites/MLA/search?q=" method="GET">
        <input type="text" class="nav-search-input" placeholder="Nunca dejes de buscar"/>
        <button className="nav-search-button" type="button" >
        <img className="lupa" src={require('./components/interface/lupa.png')} alt="lupa"/>
        </button>
      </form>
      </header>

    );
  }
}

export default App;
