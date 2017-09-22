import inventory from '../inventory';

const action = { type: 'PICK_UP_ITEM', id: 'banana' };
const act = { items: { banana: { id: 'banana' } } };

describe('when an item is picked up', () => {
  describe('if it isnt in the inventory', () => {
    const state = { inventory: { items: [ ] } };

    it('its added to the inventory', () => {
      const nextState = inventory(state, action, act);

      expect(nextState.inventory.items.length).toEqual(1);
      expect(nextState.inventory.items[0].id).toEqual('banana');
    });
  });

  describe('if it is already in the inventory', () => {
    const state = { inventory: { items: [ { id: 'banana' } ] } };
    it('its not added to the inventory', () => {
      const nextState = inventory(state, action, act);

      expect(nextState.inventory.items.length).toEqual(1);
    });
  });
});
