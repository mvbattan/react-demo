import React, { Component } from 'react';

import Item from './components/Item';

const ELEMENTS_COUNT = 10;

class App extends Component {
  state = { activeIndex: 0 };

  render() {
    const items = [...Array(ELEMENTS_COUNT).keys()];
    return (
      <div>
        {items.map((item, index) =>
          <Item
            name={`${item}`}
            isActive={this.state.activeIndex === index}
            key={index}
            onClick={() => this.setState({ activeIndex: index })}
          />
        )}
      </div>
    );
  }
}

export default App;
