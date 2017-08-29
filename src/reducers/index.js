import { combineReducers } from 'redux';
import Act5 from '../acts/act5';

const mapScriptPageToStatePage = page => {
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

const pages = (state = [ mapScriptPageToStatePage(Act5.pages.something) ], action) => {
  if(action.type === "ADD_PAGE") {
    return [
      ...state,
      mapScriptPageToStatePage(Act5.pages[action.id])
    ];
  } else if(action.type === "DRAW_NEXT_LINE") {
    return state.map(p => {
      if(p.id === action.pageId) {
        return {
          id: p.id,
          lines: drawNextLine(p.lines, action.idx)
        }
      }
      return p;
    });
  }

  return state;
}

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

const interactionState = {
  firstItem: null,
  secondItem: null
};

const interaction = (state = interactionState, action) => {
  if(action.type === "HOVER_INVENTORY_ITEM") {
    if(!state.firstItem || !state.firstItem.selected) {
      return Object.assign({}, state, {
        firstItem: {
          id: action.id,
          selected: false
        }
      });
    } else if(!state.secondItem) {
      return Object.assign({}, state, {
        secondItem: {
          id: action.id,
          selected: false
        }
      });
    }
  } else if(action.type === "UNHOVER_INVENTORY_ITEM") {
    if(state.firstItem && !state.firstItem.selected) {
      return Object.assign({}, state, { firstItem: null });
    } else {
      return Object.assign({}, state, { secondItem: null });
    }
  } else if(action.type === "USE_INVENTORY_ITEM") {
    return Object.assign({}, state, {
      firstItem: {
        id: action.id,
        selected: true
      }
    });
  }
  return Object.assign({}, state);
};

const storeApp = combineReducers({
  pages,
  inventory,
  interaction
});

export default storeApp;
