import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Line.css';
import Typing from 'react-typing-animation';
import { addPage, pickUpItem, drawNextLine, hoverHotspot, unhoverHotspot, hotspotClick } from './actions';
import ReactHoverObserver from 'react-hover-observer';

class Line extends Component {
  render() {
    const parts = this.props.parts.map((p, idx) => {
      if(typeof p === "string") {
        return (<span key={idx}>{p}</span>);
      } else {
        if(p.type === "link-page") {
          return (<span className={p.type} key={idx}
                        onClick={() => this.props.onLinkClick(p.target)}>{p.text}</span>);
        } else if (p.type === "link-item") {
          return( <span className={p.type} key={idx}
                        onClick={() => this.props.onItemClick(p.target)}>{p.text}</span>);
        } else if (p.type === "link-hotspot") {
          return (
            <ReactHoverObserver className="hotspot-hover" key={idx}
                onHoverChanged={({isHovering}) => this.props.onHotspotHoverChanged(p.id, isHovering)}>
              <span className={p.type}
                  onClick={() => this.props.onHotspotClick(p.id, this.props.pageIdx, this.props.idx, idx)}>{p.text}</span>
            </ReactHoverObserver>
          );
        } else {
          return( <span className={p.type} key={idx}>{p.text}</span>);
        }
      }
    });

    let tip = "";
    if(this.props.showTip) {
      tip = (
        <Typing cursor={false} speed={4}>
          <p className="tip">{this.props.tip}</p>
        </Typing>
      );
    }

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
          {tip}
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
    },
    onHotspotHoverChanged: (id, isHovering) => {
      dispatch(isHovering ? hoverHotspot(id) : unhoverHotspot(id));
    },
    onHotspotClick: (id, pageIdx, lineIdx, partIdx) => {
      dispatch(hotspotClick(id, pageIdx, lineIdx, partIdx));
    }
  }
};

const LineContainer = connect(
  null,
  mapDispatchToProps
)(Line);

export default LineContainer;
