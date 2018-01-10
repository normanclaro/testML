import React, { Component } from 'react';
import lupa from './components/interface/lupa.png';
export default class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="lupa">
          <img src={lupa}/>
        </div>
      </div>
    );
  }
}
