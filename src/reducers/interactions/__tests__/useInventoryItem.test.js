import useInventoryItem from '../useInventoryItem';

describe('if no first item is selected', () => {
  it('selects this one', () => {
    const action = { id: 'chickenWire' };
    const state = { interaction: { firstItem: null } };
    const items = { chickenWire: { text: 'Chicken wire' } };

    const nextState = useInventoryItem(state, action, items);

    const firstItem = nextState.interaction.firstItem;
    expect(firstItem.text).toEqual('Chicken wire');
    expect(firstItem.selected).toBeTruthy();
  });
});

describe('if a first item is selected', () => {
  const action = { id: 'chewingGum' };

  const state = {
    inventory: {
      items: [
        { id: 'chewingGum' },
        { id: 'chickenWire' }
      ]
    },
    interaction: {
      firstItem: {
        id: 'chickenWire',
        selected: true
      }
    }
  };

  describe('and it can be used with this item', () => {
    it('combines the items into the produces and clears the selection', () => {
      const items = {
        chickenWire: {
          useWith: 'chewingGum',
          produces: 'wireLadder'
        },
        wireLadder: {
          id: 'wireLadder'
        }
      };

      const nextState = useInventoryItem(state, action, items);

      expect(nextState.interaction.firstItem).toBeNull();
      expect(nextState.inventory.items.length).toEqual(1);
      expect(nextState.inventory.items[0].id).toEqual('wireLadder');
    });
  });
  describe('and it cant be used with this item', () => {
    it('clears the interaction selections but doesnt modify the items', () => {
      const items = { chickenWire: { useWith: 'motorbike' } };

      const nextState = useInventoryItem(state, action, items);

      expect(nextState.interaction.firstItem).toBeNull();
      expect(nextState.inventory.items.length).toEqual(2);
    });
  });
});
