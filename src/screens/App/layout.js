import React, { Component } from 'react';

import Item from './components/Item';

const ELEMENTS_COUNT = 10;
const items = [...Array(ELEMENTS_COUNT).keys()];

class App extends Component {
  state = { activeIndex: 0 };

  handleClick = id => this.setState({ activeIndex: id });

  itemIsActive = index => this.state.activeIndex === index;

  render() {
    return (
      <div>
        {items.map((item, index) =>
          <Item id={item} isActive={this.itemIsActive(index)} key={index} onClick={this.handleClick} />
        )}
      </div>
    );
  }
}

export default App;
