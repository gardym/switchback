import React, { Component } from 'react';
import Pages from './Pages';
import Inventory from './Inventory';
import Interaction from './Interaction';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Pages />
        <Interaction />
        <Inventory />
      </div>
    );
  }
}

export default App;
