const useInventoryItem = ({interaction, ...state}, action, act) => {
  let nextState = interaction;

  if(!interaction.firstItem || !interaction.firstItem.selected) {
    nextState = Object.assign({}, interaction, {
      firstItem: {
        id: action.id,
        selected: true,
        text: act.items[action.id].text
      }
    });
  } else {
    let items = state.inventory.items;
    if(act.items[interaction.firstItem.id].useWith === action.id) {
      items = state.inventory.items.filter(i => {
        return i.id !== interaction.firstItem.id && i.id !== action.id
      });
      items.push(act.items[act.items[interaction.firstItem.id].produces]);
    }
    nextState = Object.assign({}, interaction, {
      firstItem: null,
      secondItem: null
    });
    return Object.assign({}, state, {
      interaction: nextState,
      inventory: {
        ...state.inventory,
        items: items
      }
    });
  }
  return Object.assign({}, state, { interaction: nextState });
}

export default useInventoryItem;
