import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  state = { isActive: false };
  handleClick = () => this.setState({ isActive: !this.state.isActive });

  render() {
    return (
      <button style={{ backgroundColor: this.state.isActive ? 'blue' : 'white' }} onClick={this.handleClick}>
        {this.props.id}
      </button>
    );
  }
}

Item.propTypes = {
  id: PropTypes.number.isRequired
};

export default Item;
