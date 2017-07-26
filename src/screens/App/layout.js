import React, { Component } from 'react';

import Item from './components/Item';

const ELEMENTS_COUNT = 10;

class App extends Component {
  state = { items: [...Array(ELEMENTS_COUNT).keys()] };

  handleDelete = () => this.setState({ items: this.state.items.slice(1) });

  render() {
    return (
      <div>
        {this.state.items.map((item, index) => <Item id={item} key={index} />)}
        <button onClick={this.handleDelete}>Borrar primero</button>
      </div>
    );
  }
}

export default App;
