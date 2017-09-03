import Act5 from '../acts/act5';

const inventory = (fullState, action) => {
  if(action.type === "PICK_UP_ITEM") {
    return {
      ...fullState,
      inventory: {
        items: [
          ...fullState.inventory.items,
          Act5.items[action.id]
        ]
      }
    }
  }
  return fullState;
}

export default inventory;
