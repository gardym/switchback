const hoverInventoryItem = ({interaction, ...state}, action, act) => {
  let nextState = interaction;
  let inventoryDescription = state.inventory.description;

  if(!interaction.firstItem || !interaction.firstItem.selected) {
    inventoryDescription = act.items[action.id].hoverText;
    nextState = Object.assign({}, interaction, {
      firstItem: {
        id: action.id,
        selected: false,
        text: act.items[action.id].text
      }
    });
  } else if(!interaction.secondItem) {
    inventoryDescription = act.items[action.id].hoverText;
    if(action.id !== interaction.firstItem.id) {
      nextState = Object.assign({}, interaction, {
        secondItem: {
          id: action.id,
          selected: false,
          text: act.items[action.id].text,
          type: 'item'
        }
      });
    }
  }
  return Object.assign({}, state, {
    interaction: nextState,
    inventory: {
      ...state.inventory,
      description: inventoryDescription
    }
  });
}

export default hoverInventoryItem;
