import Act5 from '../acts/act5';

const mapItemToStateItem = item => {
  return Object.assign({}, item, { highlighted: false });
};

const initialInteractionState = {
  firstItem: null,
  secondItem: null
};

const interaction = (fullState, action) => {
  const state = fullState.interaction;
  var nextState = fullState.interaction;
  if(action.type === "HOVER_INVENTORY_ITEM") {
    if(!state.firstItem || !state.firstItem.selected) {
      nextState = Object.assign({}, state, {
        firstItem: {
          id: action.id,
          selected: false
        }
      });
    } else if(!state.secondItem) {
      if(action.id === state.firstItem.id) {
        nextState = state;
      } else {
        nextState = Object.assign({}, state, {
          secondItem: {
            id: action.id,
            selected: false
          }
        });
      }
    }
  } else if(action.type === "UNHOVER_INVENTORY_ITEM") {
    if(state.firstItem && !state.firstItem.selected) {
      nextState = Object.assign({}, state, { firstItem: null });
    } else {
      nextState = Object.assign({}, state, { secondItem: null });
    }
  } else if(action.type === "USE_INVENTORY_ITEM") {
    if(!state.firstItem.selected) {
      nextState = Object.assign({}, state, {
        firstItem: {
          id: action.id,
          selected: true
        }
      });
    } else {
      var items = fullState.inventory.items;
      if(Act5.items[state.firstItem.id].useWith === action.id) {
        items = fullState.inventory.items.filter(i => {
          return i.id !== state.firstItem.id && i.id !== action.id
        });
        items.push(mapItemToStateItem(Act5.items[Act5.items[state.firstItem.id].produces]));
      }
      nextState = Object.assign({}, state, {
        firstItem: null,
        secondItem: null
      });
      return Object.assign({}, fullState, { interaction: nextState, inventory: { items: items } });
    }
  }
  return Object.assign({}, fullState, { interaction: nextState });
};


const initialInventoryState = {
 items: [
   mapItemToStateItem(Act5.items['batteries'])
 ]
};

const inventory = (fullState, action) => {
  if(action.type === "PICK_UP_ITEM") {
    return {
      inventory: {
        items: [
          ...fullState.inventory.items,
          mapItemToStateItem(Act5.items[action.id])
        ]
      },
      interaction: fullState.interaction
    }
  } else if(action.type === "USE_INVENTORY_ITEM") {
    return {
      inventory: {
        items: fullState.inventory.items.map(i => {
          if(i.id === action.id) {
            return Object.assign({}, i, { highlighted: !i.highlighted });
          }
          return i;
        })
      },
      interaction: fullState.interaction
    }
  }
  return fullState;
}

const initialCombinedInventoryState = {
  inventory: initialInventoryState,
  interaction: initialInteractionState
};

const combinedInventory = (state = initialCombinedInventoryState, action) => {
  var nextState = Object.assign({}, interaction(state, action));
  nextState = Object.assign({}, inventory(nextState, action));
  return nextState;
}

export default combinedInventory;
