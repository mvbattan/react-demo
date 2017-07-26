import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ItemActions from '../../../../redux/Item/actions';

class Item extends Component {
  handleClick = () => this.props.dispatch(ItemActions.activateButton(this.props.id));

  render() {
    return (
      <button style={{ backgroundColor: this.props.isActive ? 'blue' : 'white' }} onClick={this.handleClick}>
        {this.props.id}
      </button>
    );
  }
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired
};

const mapStateToProps = (store, ownProps) => ({
  isActive: store.item.activeId === ownProps.id
});

export default connect(mapStateToProps)(Item);
