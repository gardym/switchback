import interactions from './interactions';

const interaction = (fullState, action, act) => {
  switch (action.type) {
    case "HOVER_INVENTORY_ITEM":
      return interactions.hoverInventoryItem(fullState, action, act);
    case "UNHOVER_INVENTORY_ITEM":
      return interactions.unhoverInventoryItem(fullState, action);
    case "USE_INVENTORY_ITEM":
    return interactions.useInventoryItem(fullState, action, act);
    case "HOVER_HOTSPOT":
      return interactions.hoverHotspot(fullState, action, act);
    case "UNHOVER_HOTSPOT":
      return interactions.unhoverHotspot(fullState, action);
    case "USE_HOTSPOT":
      return interactions.useHotspot(fullState, action, act);
    default:
      return fullState;
  }
};

export default interaction;
