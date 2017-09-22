import useHotspot from '../useHotspot';

describe('when a first item is selected', () => {
  it('uses the item with the hotspot, moves page and deselects the item', () => {
    const action = { id: 'apple' };

    const state = {
      interaction: {
        firstItem: {
          id: 'peeler',
          selected: true
        }
      },
      pages: [
      ]
    };

    const act = {
      hotspots: {
        apple: {
          useWith: {
            peeler: 'appleCore'
          }
        }
      },
      pages: {
        appleCore: {
          lines: [ ]
        }
      }
    };

    const nextState = useHotspot(state, action, act);

    expect(nextState.pages[0]).toBeDefined();
    expect(nextState.interaction.firstItem).toBeNull();
  });
});

describe('when no item is selected', () => {
  it('shows the tip for that hotspot', () => {
    const action = { pageIdx: 0, lineIdx: 1, };

    const state = {
      interaction: { },
      pages: [ { lines: [ { }, { } ] } ]
    };

    const nextState = useHotspot(state, action);

    expect(nextState.pages[0].lines[1].showTip).toBeTruthy();
  });
});
