import Act5 from '../acts/act5';

const initialInteractionState = {
  firstItem: null,
  secondItem: null
};

const interaction = (fullState, action) => {
  const state = fullState.interaction;
  if(action.type === "HOVER_INVENTORY_ITEM") {
    if(!state.firstItem || !state.firstItem.selected) {
      return Object.assign({}, state, {
        firstItem: {
          id: action.id,
          selected: false
        }
      });
    } else if(!state.secondItem) {
      if(action.id === state.firstItem.id) {
        return state;
      } else {
        return Object.assign({}, state, {
          secondItem: {
            id: action.id,
            selected: false
          }
        });
      }
    }
  } else if(action.type === "UNHOVER_INVENTORY_ITEM") {
    if(state.firstItem && !state.firstItem.selected) {
      return Object.assign({}, state, { firstItem: null });
    } else {
      return Object.assign({}, state, { secondItem: null });
    }
  } else if(action.type === "USE_INVENTORY_ITEM") {
    if(!state.firstItem.selected) {
      return Object.assign({}, state, {
        firstItem: {
          id: action.id,
          selected: true
        }
      });
    } else {
      return Object.assign({}, state, {
        firstItem: null
      });
    }
  }
  return Object.assign({}, state);
};

const initialInventoryState = {
 items: [
   { highlighted: false, id: "batteries", text: "Batteries", useWith: "carlamp" }
 ]
};

const mapItemToStateItem = item => {
  return Object.assign({}, item, { highlighted: false });
};

const inventory = (fullState, action) => {
  const state = fullState.inventory;
  if(action.type === "PICK_UP_ITEM") {
    return {
      items: [
        ...state.items,
        mapItemToStateItem(Act5.items[action.id])
      ]
    }
  } else if(action.type === "USE_INVENTORY_ITEM") {
    return {
      items: state.items.map(i => {
        if(i.id === action.id) {
          return Object.assign({}, i, { highlighted: !i.highlighted });
        }
        return i;
      })
    }
  }
  return state;
}

const initialCombinedInventoryState = {
  inventory: initialInventoryState,
  interaction: initialInteractionState
};

const combinedInventory = (state = initialCombinedInventoryState, action) => {
  return {
    interaction: interaction(state, action),
    inventory: inventory(state, action)
  };
}

export default combinedInventory;
