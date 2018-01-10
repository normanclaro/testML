import React, { Component } from 'react';
import busqueda from './components/search.js';

class busqueda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    this.handleClick = this.handleClick.bind(this);
      error: null,
      isLoaded: false,
      author: {}
    };
  }

  componentDidMount() {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=​:query")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            author: result.author
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {author.map(author => (
            <li key={author.name}>
              {author.name} {author.lastname}
            </li>
          ))}
        </ul>
      );
    }
  }
}
ReactDOM.render(
  <Busqueda />,
  document.getElementById('root')
);
