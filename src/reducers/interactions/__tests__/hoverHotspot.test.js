import hoverHotspot from '../hoverHotspot';

const action = { id: 'ground' };

describe('when the previous state does not have a first item selected', () => {
  it('returns the previous state', () => {
    const state = { interaction: { firstItem: { selected: false } } };

    const nextState = hoverHotspot(state, action);

    expect(nextState).toEqual(state);
  });
});

describe('when the previous state does have a first item selected', () => {
  it('includes the hovered item in the next state', () => {
    const state = { interaction: { firstItem: { selected: true } } };
    const act = { hotspots: { ground: { text: 'Ground' } } };

    const nextState = hoverHotspot(state, action, act);

    expect(nextState.interaction.secondItem).toBeDefined();

  });
});
