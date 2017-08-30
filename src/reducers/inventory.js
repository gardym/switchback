import Act5 from '../acts/act5';

const initialInventoryState = {
 items: [
   { highlighted: false, id: "batteries", text: "Batteries" }
 ]
};

const mapItemToStateItem = item => {
  return Object.assign({}, item, { highlighted: false });
};

const inventory = (state = initialInventoryState, action) => {
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

export default inventory;
