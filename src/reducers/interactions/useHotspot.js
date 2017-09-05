import Act5 from '../../acts/act5';
import { mapScriptPageToStatePage } from '../pages';

const useHotspot = ({interaction, ...state}, action) => {
  if(interaction.firstItem && interaction.firstItem.selected) {
    let pages = [ ...state.pages ];

    if(Act5.items[interaction.firstItem.id].useWith === action.id) {
      pages.push(mapScriptPageToStatePage(Act5.pages[Act5.hotspots[action.id].target], state));
    }

    return Object.assign({}, state, {
      interaction: Object.assign({}, interaction, {
        firstItem: null,
        secondItem: null
      }),
      pages: pages
    });

  } else {
    const nextStatePages = state.pages.map((p, pidx) => {
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

    return Object.assign({}, state, {
      interaction: interaction,
      pages: nextStatePages
    });
  }
}

export default useHotspot;
