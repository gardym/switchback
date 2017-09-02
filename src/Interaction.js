import React, { Component } from 'react';
import { connect } from 'react-redux';

class Interaction extends Component {
  render() {
    if(!this.props.firstItem) {
      return (<div className="interaction"><p></p></div>);
    }

    var secondItemElement = null;
    if(this.props.secondItem) {
      secondItemElement = (<span className="link-item">{this.props.secondItem.id}</span>);
    }

    return (
      <div className="interaction">
        <p>
          <span>Use </span>
          <span className="link-item">{this.props.firstItem.id}</span>
          <span> with </span>
          {secondItemElement}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    firstItem: state.inventory.interaction.firstItem,
    secondItem: state.inventory.interaction.secondItem
  }
};

const InteractionContainer = connect(
  mapStateToProps
)(Interaction);

export default InteractionContainer;
