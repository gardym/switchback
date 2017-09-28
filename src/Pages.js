import React, { Component } from 'react';
import Page from './Page';
import { connect } from 'react-redux';

class Pages extends Component {
  render() {
    let page = (
      <Page page={this.props.pages[this.props.pages.length - 1]} />
    );
    return (
        <div className="page-container">
          {page}
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pages: state.pages
  }
};

const PagesContainer = connect(
  mapStateToProps
)(Pages);

export default PagesContainer;
