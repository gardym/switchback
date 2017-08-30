const interactionState = {
  firstItem: null,
  secondItem: null
};

const interaction = (state = interactionState, action) => {
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

export default interaction;
