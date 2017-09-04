import React, { Component } from 'react';
import ReactHoverObserver from 'react-hover-observer';

class InventoryItem extends Component {
  render() {
    return (
      <ReactHoverObserver
          onHoverChanged={({isHovering}) => this.props.onHoverChanged(this.props.id, isHovering)}>
        <div className='item'
             onClick={() => this.props.onInventoryItemClicked(this.props.id)}><p>{this.props.text}</p></div>
      </ReactHoverObserver>
    );
  }
}

export default InventoryItem;
