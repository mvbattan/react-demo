import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleRoot } from 'radium';

import styles, { BaseStyles } from './styles';

import Layout from './layout';

class App extends Component {
  componentWillMount() {}

  render() {
    return (
      <StyleRoot style={styles.base}>
        {BaseStyles}
        <Layout />
      </StyleRoot>
    );
  }
}

const mapStateToProps = store => ({
  loading: store.auth.loading,
  currentUser: store.auth.currentUser
});

export default connect(mapStateToProps)(App);
