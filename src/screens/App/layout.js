import React, { Component } from 'react';

import Item from './components/Item';

const ELEMENTS_COUNT = 10;
const items = [...Array(ELEMENTS_COUNT).keys()];

class App extends Component {
  render() {
    return (
      <div>
        {items.map((item, index) => <Item id={item} key={index} />)}
      </div>
    );
  }
}

export default App;
