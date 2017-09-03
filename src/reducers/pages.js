import Act5 from '../acts/act5';

export const mapScriptPageToStatePage = page => {
  return {
    id: page.id,
    lines: page.lines.map((l, idx) => {
      return {
        hidden: idx !== 0,
        drawing: idx === 0,
        drawn: false,
        parts: l.parts
      }
    })
  }
};

const drawNextLine = (lines, idx) => {
  return lines.map((l, i) => {
    if(i === idx) {
      return {
        parts: l.parts,
        drawn: true,
        drawing: false,
        hidden: false
      }
    } else if(i === idx + 1) {
      return {
        parts: l.parts,
        drawn: false,
        drawing: true,
        hidden: false
      }
    } else {
      return l
    }
  });
}

export const pages = (fullState, action) => {
  var state = fullState.pages;
  var nextState = state;
  if(action.type === "ADD_PAGE") {
    nextState = [
      ...state,
      mapScriptPageToStatePage(Act5.pages[action.id])
    ];
  } else if(action.type === "DRAW_NEXT_LINE") {
    nextState = state.map(p => {
      if(p.id === action.pageId) {
        return {
          id: p.id,
          lines: drawNextLine(p.lines, action.idx)
        }
      }
      return p;
    });
  }

  return Object.assign({}, fullState, { pages: nextState } );
}
