import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const LineContainer = connect(
  null,
  mapDispatchToProps
)(Line);

export default LineContainer;
