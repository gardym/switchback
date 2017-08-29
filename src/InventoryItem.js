import React, { Component } from 'react';
import classNames from 'classnames';
import ReactHoverObserver from 'react-hover-observer';

class InventoryItem extends Component {
  render() {
    const itemClass = classNames('item', {
      highlighted: this.props.highlighted
    });
    return (
      <ReactHoverObserver
          onHoverChanged={({isHovering}) => this.props.onHoverChanged(this.props.id, isHovering)}>
        <div className={itemClass}
             onClick={() => this.props.onInventoryItemClicked(this.props.id)}><p>{this.props.text}</p></div>
      </ReactHoverObserver>
    );
  }
}

export default InventoryItem;
