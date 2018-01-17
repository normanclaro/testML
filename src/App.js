import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js'
import SearchForm from './components/form.js'
import searchNav from './components/search.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <searchNav />
      </div>
    );
  }
}




export default App;
