import React, { Component } from 'react';
import Line from './Line';

class Page extends Component {
  render() {
    const lineElements = this.props.page.lines.map((l, idx) => {
      let hotspot = l.parts.find(p => p.type === "link-hotspot");
      let tip = hotspot ? hotspot.tip : null;
      return (
        <Line pageId={this.props.page.id}
          pageIdx={this.props.idx}
          key={`${this.props.page.id}_${idx}`}
          idx={idx}
          parts={l.parts}
          drawing={l.drawing}
          hidden={l.hidden}
          drawn={l.drawn}
          tip={tip}
          showTip={l.showTip} />
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
