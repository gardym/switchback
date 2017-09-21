import Act5 from '../acts/act5';
import interactions from './interactions';

const interaction = (fullState, action) => {
  switch (action.type) {
    case "HOVER_INVENTORY_ITEM":
      return interactions.hoverInventoryItem(fullState, action, Act5);
    case "UNHOVER_INVENTORY_ITEM":
      return interactions.unhoverInventoryItem(fullState, action);
    case "USE_INVENTORY_ITEM":
    return interactions.useInventoryItem(fullState, action, Act5);
    case "HOVER_HOTSPOT":
      return interactions.hoverHotspot(fullState, action, Act5);
    case "UNHOVER_HOTSPOT":
      return interactions.unhoverHotspot(fullState, action);
    case "USE_HOTSPOT":
      return interactions.useHotspot(fullState, action, Act5);
    default:
      return fullState;
  }
};

export default interaction;
