import React, { Component } from 'react';
import Line from './Line';

class Page extends Component {
  render() {
    const lineElements = this.props.page.lines.map((l, idx) => {
      return (
        <Line pageId={this.props.page.id}
          key={`${this.props.page.id}_${idx}`}
          idx={idx}
          parts={l.parts}
          drawing={l.drawing}
          hidden={l.hidden}
          drawn={l.drawn} />
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
