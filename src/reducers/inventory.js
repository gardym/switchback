const inventory = (state, action, allItems) => {
  if(action.type === "PICK_UP_ITEM") {
    if(!state.inventory.items.find(i => i.id === action.id)) {
      return {
        ...state,
        inventory: {
          ...state.inventory,
          items: [
            ...state.inventory.items,
            allItems[action.id]
          ]
        }
      }
    }
  }
  return state;
}

export default inventory;
