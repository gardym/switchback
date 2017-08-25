import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './Page';
import Act5 from './acts/act5';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const pages = this.props.pages.map(p => {
      return <Page page={p} />
    });

    return (
      <div>
        {pages}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    pages: state.pages
  }
};

const mapDispatchToProps = dispatch => {
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
