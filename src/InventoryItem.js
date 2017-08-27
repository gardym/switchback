import React, { Component } from 'react';
import classNames from 'classnames';

class InventoryItem extends Component {
  render() {
    const itemClass = classNames('item', {
      highlighted: this.props.highlighted
    });
    return (
      <div className={itemClass}
           onClick={() => this.props.onInventoryItemClicked(this.props.id)}><p>{this.props.text}</p></div>
    );
  }
}

export default InventoryItem;
