import Act5 from '../acts/act5';

export const mapScriptPageToStatePage = (page, fullState) => {
  return {
    id: page.id,
    lines: page.lines.map((l, idx) => {
      if(l.condition) {
        if(l.condition.type === "inventory" && l.condition.rule === "doesNotContain") {
          let applicableValues = l.condition.value.filter(
            c => fullState.inventory.items.find(i => i.id === c)
          );
          if(applicableValues.length > 0) {
            return null;
          }
        } else if (l.condition.type === "inventory" && l.condition.rule === "contains") {
          let applicableValues = l.condition.value.filter(
            c => fullState.inventory.items.find(i => i.id === c)
          );
          if(applicableValues.length === 0) {
            return null;
          }
        }
      }

      return Object.assign({}, l, {
        hidden: idx !== 0,
        drawing: idx === 0,
        drawn: false
      });
    }).filter(l => l !== null)
  }
};

const drawNextLine = (lines, idx) => {
  return lines.map((l, i) => {
    if(i === idx) {
      return Object.assign({}, l, {
        drawn: true,
        drawing: false,
        hidden: false
      });
    } else if(i === idx + 1) {
      return Object.assign({}, l, {
        drawn: false,
        drawing: true,
        hidden: false
      });
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
      mapScriptPageToStatePage(Act5.pages[action.id], fullState)
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
