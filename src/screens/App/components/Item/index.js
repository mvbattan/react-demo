import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  handleClick = () => this.props.onClick(this.props.id);

  render() {
    const { id, isActive } = this.props;
    return (
      <button style={{ backgroundColor: isActive ? 'blue' : 'white' }} onClick={this.handleClick}>
        {id}
      </button>
    );
  }
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Item;
