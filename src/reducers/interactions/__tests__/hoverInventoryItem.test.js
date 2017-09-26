import hoverInventoryItem from '../hoverInventoryItem';

const action = { id: 'balloon' };
const items = { balloon: { text: 'Balloon', hoverText: 'A balloon' },
                       pin: { text: 'Pin', hoverText: 'A pin' } };

const blankState = {
  interaction: {
    firstItem: null,
    secondItem: null
  },
  inventory: {
    description: null
  }
};


describe('when a first item has not been selected in the previous state', () => {
  it('hovers over the item in the next state', () => {
    const nextState = hoverInventoryItem(blankState, action, items);

    expect(nextState.inventory.description).toEqual('A balloon');

    expect(nextState.interaction.firstItem).toBeDefined();
    expect(nextState.interaction.firstItem.text).toEqual('Balloon');
    expect(nextState.interaction.firstItem.selected).toBeFalsy();
  });
});

describe('when a first item has been selected, but not a second item', () => {
  const firstSelectedState = Object.assign({}, blankState, {
    interaction: {
      firstItem: {
        id: 'balloon',
        selected: true
      }
    }
  });

  describe('if the second item is the first item', () => {
    it('does not hover over it again', () => {
      const nextState = hoverInventoryItem(firstSelectedState, action, items);

      expect(nextState.interaction.secondItem).toBeUndefined();
    });
  });

  describe('if the second item is not the first item', () => {
    it('hovers over the second item', () => {
      const secondAction = { id: 'pin' };

      const nextState = hoverInventoryItem(firstSelectedState, secondAction, items);

      expect(nextState.inventory.description).toEqual('A pin');

      expect(nextState.interaction.secondItem).toBeDefined();
      expect(nextState.interaction.secondItem.text).toEqual('Pin');
      expect(nextState.interaction.secondItem.selected).toBeFalsy();
    });
  });
});

