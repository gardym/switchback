import React, { Component } from 'react';
import { connect } from 'react-redux';
import InventoryItem from './InventoryItem';
import { useInventoryItem, hoverInventoryItem, unhoverInventoryItem } from './actions';

class Inventory extends Component {
  render() {
    const itemElements = this.props.inventory.items.map(i => {
      return (
        <InventoryItem text={i.text}
                       onInventoryItemClicked={this.props.onInventoryItemClicked}
                       onHoverChanged={this.props.onHoverChanged}
                       id={i.id}
                       highlighted={i.highlighted} />
      );
    });
    return (
      <div className="inventory">
        {itemElements}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inventory: state.inventory
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onInventoryItemClicked: (id) => {
      dispatch(useInventoryItem(id));
    },
    onHoverChanged: (id, isHovering) => {
      dispatch(isHovering ? hoverInventoryItem(id) : unhoverInventoryItem(id));
    }
  }
};

const InventoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventory);

export default InventoryContainer;
