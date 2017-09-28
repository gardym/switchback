import React, { Component } from 'react';
import { connect } from 'react-redux';
import InventoryItem from './InventoryItem';
import { useInventoryItem, hoverInventoryItem, unhoverInventoryItem } from './actions';

class Inventory extends Component {
  render() {
    const itemElements = this.props.inventory.items.map((i, idx) => {
      return (
        <InventoryItem text={i.text}
                       key={`${i.id}_${idx}`}
                       onInventoryItemClicked={this.props.onInventoryItemClicked}
                       onHoverChanged={this.props.onHoverChanged}
                       id={i.id} />
      );
    });

    return (
      <div className="inventory-container">
        <div className="inventory-description">
          <p>{this.props.inventory.description}</p>
        </div>
        <div className="inventory">
          <div className="inventory-items">
            {itemElements}
          </div>
        </div>
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
