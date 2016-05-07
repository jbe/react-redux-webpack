'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ExampleComponent from '../components/ExampleComponent';

class App extends React.Component {
  render() {
    return (
      <ExampleComponent text="This is an example component." />
    );
  }
}

// export default App;

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

