export const addPage = id => {
  return {
    type: "ADD_PAGE",
    id
  }
};

export const drawNextLine = (pageId, idx) => {
  return {
    type: "DRAW_NEXT_LINE",
    pageId,
    idx
  }
};

export const pickUpItem = id => {
  return {
    type: "PICK_UP_ITEM",
    id
  }
};

export const useInventoryItem = id => {
  return {
    type: "USE_INVENTORY_ITEM",
    id
  }
};

export const hoverInventoryItem = id => {
  return {
    type: "HOVER_INVENTORY_ITEM",
    id
  }
};

export const unhoverInventoryItem = id => {
  return {
    type: "UNHOVER_INVENTORY_ITEM",
    id
  }
}

export const hoverHotspot = id => {
  return {
    type: "HOVER_HOTSPOT",
    id
  }
}

export const unhoverHotspot = id => {
  return {
    type: "UNHOVER_HOTSPOT",
    id
  }
}

export const hotspotClick = id => {
  return {
    type: "USE_HOTSPOT",
    id
  }
}
