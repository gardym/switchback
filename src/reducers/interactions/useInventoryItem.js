import Act5 from '../../acts/act5';

const useInventoryItem = ({interaction, ...state}, action) => {
  let nextState = interaction;

  if(!interaction.firstItem.selected) {
    nextState = Object.assign({}, interaction, {
      firstItem: {
        id: action.id,
        selected: true,
        text: Act5.items[action.id].text
      }
    });
  } else {
    let items = state.inventory.items;
    if(Act5.items[interaction.firstItem.id].useWith === action.id) {
      items = state.inventory.items.filter(i => {
        return i.id !== interaction.firstItem.id && i.id !== action.id
      });
      items.push(Act5.items[Act5.items[interaction.firstItem.id].produces]);
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
