import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './Page';
import Act5 from './acts/act5';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const pages = this.props.pages.map(p => {
      return <Page page={p} onLinkClick={this.props.onLinkClick} />
    });

    return (
      <div>
        {pages}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pages: state.pages
  }
};

const addPage = id => {
  return {
    type: "ADD_PAGE",
    id
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onLinkClick: id => {
      dispatch(addPage(id));
    }
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
