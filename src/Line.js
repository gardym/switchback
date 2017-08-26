import React, { Component } from 'react';
import './Line.css';
import Typing from 'react-typing-animation';

class Line extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const parts = this.props.parts.map(p => {
      if(typeof p === "string") {
        return (<span>{p}</span>);
      } else {
        return (<span className={p.type} onClick={() => this.props.onLinkClick(p.target)}>{p.text}</span>);
      }
    });

    return (
      <div className="line">
        <p>
          <Typing cursor={false} speed={20}>{parts}</Typing>
        </p>
      </div>
    );
  }
}

export default Line;
