import interactions from './interactions';

const interaction = (fullState, action) => {
  if(action.type === "HOVER_INVENTORY_ITEM") {
    return interactions.hoverInventoryItem(fullState, action);
  } else if(action.type === "UNHOVER_INVENTORY_ITEM") {
    return interactions.unhoverInventoryItem(fullState, action);
  } else if(action.type === "USE_INVENTORY_ITEM") {
    return interactions.useInventoryItem(fullState, action);
  } else if(action.type === "HOVER_HOTSPOT") {
    return interactions.hoverHotspot(fullState, action);
  } else if(action.type === "UNHOVER_HOTSPOT") {
    return interactions.unhoverHotspot(fullState, action);
  } else if(action.type === "USE_HOTSPOT") {
    return interactions.useHotspot(fullState, action);
  } else {
    return fullState;
  }
};

export default interaction;
