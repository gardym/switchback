const useInventoryItem = ({interaction, ...state}, action, allItems) => {
  let nextState = interaction;

  if(!interaction.firstItem || !interaction.firstItem.selected) {
    nextState = Object.assign({}, interaction, {
      firstItem: {
        id: action.id,
        selected: true,
        text: allItems[action.id].text
      }
    });
  } else {
    let inventoryItems = state.inventory.items;
    if(allItems[interaction.firstItem.id].useWith === action.id) {
      inventoryItems = inventoryItems.filter(i => {
        return i.id !== interaction.firstItem.id && i.id !== action.id
      });
      inventoryItems.push(allItems[allItems[interaction.firstItem.id].produces]);
    }
    nextState = Object.assign({}, interaction, {
      firstItem: null,
      secondItem: null
    });
    return Object.assign({}, state, {
      interaction: nextState,
      inventory: {
        ...state.inventory,
        items: inventoryItems
      }
    });
  }
  return Object.assign({}, state, { interaction: nextState });
}

export default useInventoryItem;
