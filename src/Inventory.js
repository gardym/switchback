import React, { Component } from 'react';
import { connect } from 'react-redux';
import InventoryItem from './InventoryItem';
import { useInventoryItem } from './actions';

class Inventory extends Component {
  render() {
    const itemElements = this.props.inventory.items.map(i => {
      return (
        <InventoryItem text={i.text}
                       onInventoryItemClicked={this.props.onInventoryItemClicked}
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
    }
  }
};

const InventoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventory);

export default InventoryContainer;
