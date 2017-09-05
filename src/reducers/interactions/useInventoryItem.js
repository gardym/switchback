import Act5 from '../../acts/act5';

const useInventoryItem = (fullState, action) => {
  const state = fullState.interaction;
  var nextState = fullState.interaction;

  if(!state.firstItem.selected) {
    nextState = Object.assign({}, state, {
      firstItem: {
        id: action.id,
        selected: true,
        text: Act5.items[action.id].text
      }
    });
  } else {
    var items = fullState.inventory.items;
    if(Act5.items[state.firstItem.id].useWith === action.id) {
      items = fullState.inventory.items.filter(i => {
        return i.id !== state.firstItem.id && i.id !== action.id
      });
      items.push(Act5.items[Act5.items[state.firstItem.id].produces]);
    }
    nextState = Object.assign({}, state, {
      firstItem: null,
      secondItem: null
    });
    return Object.assign({}, fullState, { interaction: nextState, inventory: { items: items } });
  }
  return Object.assign({}, fullState, { interaction: nextState });
}

export default useInventoryItem;
