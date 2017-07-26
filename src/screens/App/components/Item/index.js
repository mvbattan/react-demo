import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ItemActions from '../../../../redux/Item/actions';

class Item extends Component {
  state = { shouldShowComponent: true };

  handleClick = () => {
    this.props.dispatch(ItemActions.activateButton(this.props.id.item));
    if (this.props.isActive) this.setState({ shouldShowComponent: !this.state.shouldShowComponent });
  };

  render() {
    if (!this.state.shouldShowComponent) return null;
    return (
      <button style={{ backgroundColor: this.props.isActive ? 'blue' : 'white' }} onClick={this.handleClick}>
        {this.props.id.item}
      </button>
    );
  }
}

Item.propTypes = {
  id: PropTypes.shape({ item: PropTypes.number.isRequired }).isRequired,
  isActive: PropTypes.bool.isRequired
};

const mapStateToProps = (store, ownProps) => ({
  isActive: store.item.activeId === ownProps.id.item,
  id: { ...ownProps.id }
});

export default connect(mapStateToProps)(Item);
