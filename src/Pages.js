import React, { Component } from 'react';
import Page from './Page';
import { connect } from 'react-redux';

class Pages extends Component {
  render() {
    const pages = [this.props.pages[this.props.pages.length - 1]].map((p, idx) => {
      return <Page key={`${p}_${idx}`} page={p} idx={idx} />
    });
    return (
        <div>
          <div className="pages">
            {pages}
          </div>
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
