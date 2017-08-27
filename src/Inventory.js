import React, { Component } from 'react';
import { connect } from 'react-redux';

class Inventory extends Component {
  render() {
    const itemElements = this.props.inventory.items.map(i => {
      return (
        <div className="item"><p>{i}</p></div>
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

const InventoryContainer = connect(
  mapStateToProps
)(Inventory);

export default InventoryContainer;
