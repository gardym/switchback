import React, { Component } from 'react';
import Line from './Line';

class Page extends Component {
  render() {
    const lineElements = this.props.page.lines.map((_, idx) => {
      return (
        <Line pageId={this.props.page.id} idx={idx} />
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
