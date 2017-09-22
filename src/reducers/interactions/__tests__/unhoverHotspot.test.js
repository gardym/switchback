import unhoverHotspot from '../unhoverHotspot';

const action = { };
const state = {
  interaction: {
    firstItem: {
      selected: true
    }
  }
};

describe('when a first item is selected', () => {
  it('unhovers the second item', () => {
    const nextState = unhoverHotspot(state, action);

    expect(nextState.secondItem).toBeUndefined();
  });
});

