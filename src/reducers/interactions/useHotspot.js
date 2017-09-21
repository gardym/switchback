import { mapScriptPageToStatePage } from '../pages';

const useHotspot = ({interaction, ...state}, action, act) => {
  if(interaction.firstItem && interaction.firstItem.selected) {
    let pages = [ ...state.pages ];

    if(act.hotspots[action.id].useWith[interaction.firstItem.id] !== undefined) {
      let newPage = act.pages[act.hotspots[action.id].useWith[interaction.firstItem.id]];
      pages.push(mapScriptPageToStatePage(newPage, state));
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
