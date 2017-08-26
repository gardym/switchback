import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Line.css';
import Typing from 'react-typing-animation';

class Line extends Component {
  render() {
    console.log(this.props);

    const parts = this.props.parts.map(p => {
      if(typeof p === "string") {
        return (<span>{p}</span>);
      } else {
        return (<span className={p.type} onClick={() => this.props.onLinkClick(p.target)}>{p.text}</span>);
      }
    });

    if(this.props.drawing) {

      return (
        <div className="line">
          <p>
            <Typing cursor={false}
                    speed={20}
                    onFinishedTyping={() => this.props.onFinishedTyping(this.props.pageId, this.props.idx)}>{parts}</Typing>
          </p>
        </div>
      );
    } else if(this.props.drawn) {
      return (
        <div className="line">
          <p>{parts}</p>
        </div>
      );
    }

    return (null);
  }
}

const addPage = id => {
  return {
    type: "ADD_PAGE",
    id
  }
};

const drawNextLine = (pageId, idx) => {
  return {
    type: "DRAW_NEXT_LINE",
    pageId,
    idx
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onLinkClick: id => {
      dispatch(addPage(id));
    },
    onFinishedTyping: (pageId, idx) => {
      dispatch(drawNextLine(pageId, idx));
    }
  }
};

const mapStateToProps = (state, ownProps) => {
  const page = state.pages.filter(p => p.id === ownProps.pageId)[0];
  return page.lines[ownProps.idx];
};

const LineContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Line);

export default LineContainer;
