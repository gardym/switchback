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
