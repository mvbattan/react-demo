import React from 'react';
import PropTypes from 'prop-types';

function Item({ name, isActive, onClick }) {
  return (
    <button style={{ backgroundColor: isActive ? 'blue' : 'white' }} onClick={onClick}>
      {name}
    </button>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Item;
