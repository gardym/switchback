import unhoverInventoryItem from './unhoverInventoryItem';

const action = { };

describe('when a first item is not selected', () => {
  const state = { interaction: { firstItem: { selected: false } } };

  it('unhovers the first item', () => {
    const nextState = unhoverInventoryItem(state, action);

    expect(nextState.interaction.firstItem).toBeNull();
    expect(nextState.inventory.description).toBeNull();
  });
});

describe('when a first item is selected', () => {
  const state = { interaction: { firstItem: { selected: true }, secondItem: { } } };

  it('unhovers the second item', () => {
    const nextState = unhoverInventoryItem(state, action);

    expect(nextState.interaction.firstItem).toBeDefined();
    expect(nextState.interaction.secondItem).toBeNull();
  });
});
