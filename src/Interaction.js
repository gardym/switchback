import React, { Component } from 'react';
import { connect } from 'react-redux';

class Interaction extends Component {
  render() {
    if(!this.props.firstItem) {
      return (
          <div className="interaction-container">
            <div className="interaction"><p></p></div>
          </div>
      );
    }

    let secondItemElement = null;
    if(this.props.secondItem) {
      const className = `link-${this.props.secondItem.type}`;
      secondItemElement = (<span className={className}>{this.props.secondItem.text}</span>);
    }

    return (
      <div className="interaction-container">
        <div className="interaction">
          <p>
            <span>Use </span>
            <span className="link-item">{this.props.firstItem.text}</span>
            <span> with </span>
            {secondItemElement}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    firstItem: state.interaction.firstItem,
    secondItem: state.interaction.secondItem
  }
};

const InteractionContainer = connect(
  mapStateToProps
)(Interaction);

export default InteractionContainer;
