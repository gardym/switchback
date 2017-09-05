import Act5 from '../acts/act5';
import { mapScriptPageToStatePage } from './pages';
import hoverInventoryItem from './interactions/hoverInventoryItem';
import unhoverInventoryItem from './interactions/unhoverInventoryItem';
import useInventoryItem from './interactions/useInventoryItem';

const interaction = (fullState, action) => {
  const state = fullState.interaction;
  var nextState = fullState.interaction;
  if(action.type === "HOVER_INVENTORY_ITEM") {
    return hoverInventoryItem(fullState, action);
  } else if(action.type === "UNHOVER_INVENTORY_ITEM") {
    return unhoverInventoryItem(fullState, action);
  } else if(action.type === "USE_INVENTORY_ITEM") {
    return useInventoryItem(fullState, action);
  } else if(action.type === "HOVER_HOTSPOT") {
    if(state.firstItem && state.firstItem.selected) {
      nextState = Object.assign({}, state, {
        secondItem: {
          id: action.id,
          selected: false,
          type: 'hotspot',
          text: Act5.hotspots[action.id].text
        }
      });
    }
  } else if(action.type === "UNHOVER_HOTSPOT") {
    if(state.firstItem && state.firstItem.selected) {
      nextState = Object.assign({}, state, {
        secondItem: null
      });
    }
  } else if(action.type === "USE_HOTSPOT") {
    if(state.firstItem && state.firstItem.selected) {
      var pages = [ ...fullState.pages ];
      if(Act5.items[state.firstItem.id].useWith === action.id) {
        pages.push(mapScriptPageToStatePage(Act5.pages[Act5.hotspots[action.id].target]));
      }
      nextState = Object.assign({}, state, {
        firstItem: null,
        secondItem: null
      });
      return Object.assign({}, fullState, {
        interaction: nextState,
        pages: pages
      });
    } else {
      const nextStatePages = fullState.pages.map((p, pidx) => {
        if(pidx === action.pageIdx) {
          return Object.assign({}, p, {
            lines: p.lines.map((l, lidx) => {
              if(lidx === action.lineIdx) {
                return Object.assign({}, l, { showTip: true });
              }
              return l;
            })
          });
        }
        return p;
      });
      return Object.assign({}, fullState, { pages: nextStatePages });
    }
  }
  return Object.assign({}, fullState, { interaction: nextState });
};

export default interaction;
