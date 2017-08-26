import React, { Component } from 'react';
import Line from './Line';

class Page extends Component {
  render() {
    const lineElements = this.props.page.lines.map(l => {
      return (
        <Line parts={l.parts} onLinkClick={this.props.onLinkClick}/>
      );
    });

    return (
      <div className="page">
        {lineElements}
      </div>
    );
  }
}

export default Page;
