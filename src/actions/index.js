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
