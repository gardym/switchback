const unhoverInventoryItem = ({interaction, ...state}, action) => {
  var nextState = interaction;

  if(interaction.firstItem && !interaction.firstItem.selected) {
    nextState = Object.assign({}, interaction, { firstItem: null });
  } else {
    nextState = Object.assign({}, interaction, { secondItem: null });
  }
  return Object.assign({}, state, { interaction: nextState });
}

export default unhoverInventoryItem;
