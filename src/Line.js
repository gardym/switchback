import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Line.css';
import Typing from 'react-typing-animation';
import { addPage, pickUpItem, drawNextLine } from './actions';

class Line extends Component {
  render() {
    const parts = this.props.parts.map(p => {
      if(typeof p === "string") {
        return (<span>{p}</span>);
      } else {
        if(p.type === "link-page") {
          return (<span className={p.type}
                        onClick={() => this.props.onLinkClick(p.target)}>{p.text}</span>);
        } else if (p.type === "link-item" && !p.hasBeenPickedUp) {
          return( <span className={p.type}
                        onClick={() => this.props.onItemClick(p.target)}>{p.text}</span>);
        } else {
          return( <span className={p.type}>{p.text}</span>);
        }
      }
    });

    if(this.props.drawing) {

      return (
        <div className="line">
          <p>
            <Typing cursor={false}
                    speed={4}
                    startDelay={40}
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

const mapDispatchToProps = dispatch => {
  return {
    onLinkClick: id => {
      dispatch(addPage(id));
    },
    onItemClick: id => {
      dispatch(pickUpItem(id));
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
