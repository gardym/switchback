const unhoverInventoryItem = ({interaction, ...state}, action) => {
  let nextState = interaction;

  if(interaction.firstItem && !interaction.firstItem.selected) {
    nextState = Object.assign({}, interaction, { firstItem: null });
  } else {
    nextState = Object.assign({}, interaction, { secondItem: null });
  }
  return Object.assign({}, state, {
    interaction: nextState,
    inventory: {
      ...state.inventory,
      description: null
    }
  });
}

export default unhoverInventoryItem;
