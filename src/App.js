import React, { Component } from 'react';
import logo from './logo.svg';
import Page from './Page';
import Inventory from './Inventory';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const pages = this.props.pages.map(p => {
      return <Page page={p} />
    });

    return (
      <div className="wrapper">
        <div>
          <div className="pages">
            {pages}
          </div>
        </div>
        <Inventory />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pages: state.pages
  }
};

const AppContainer = connect(
  mapStateToProps
)(App);

export default AppContainer;
