import { pages } from './pages';

const action = { type: 'ADD_PAGE', id: 'beach' };

describe('when a page is added', () => {
  it('adds the page to the state', () => {
    const action = { type: 'ADD_PAGE', id: 'beach' };
    const act = { pages: { beach: { id: 'beach', lines: [ ] } } };
    const state = { pages: [ ] };

    const nextState = pages(state, action, act);

    expect(nextState.pages.length).toEqual(1);
    expect(nextState.pages[0].id).toEqual('beach');
  });

});

describe('drawing a line with an inventory condition', () => {
  describe('when the condition is doesNotContain', () => {
    const act = {
      pages: {
        beach: {
          id: 'beach',
          lines: [
            {
              condition: {
                type: 'inventory',
                rule: 'doesNotContain',
                value: ['towel']
              },
              parts: [ "You need a towel to come to the beach" ]
            }
          ]
        }
      }
    };

    it('the line is drawn if it is not in the inventory', () => {
      const state = { pages: [ ], inventory: { items: [ ] } };

      const nextState = pages(state, action, act);

      expect(nextState.pages[0].lines.length).toEqual(1);
    });

    it('the line is not drawn if it is in the inventory', () => {
      const state = {
        pages: [ ],
        inventory: { items: [ { id: 'towel' } ] }
      };

      const nextState = pages(state, action, act);

      expect(nextState.pages[0].lines.length).toEqual(0);
    });
  });

  describe('and that condition is contains', () => {
    const act = {
      pages: {
        beach: {
          id: 'beach',
          lines: [
            {
              condition: {
                type: 'inventory',
                rule: 'contains',
                value: ['towel']
              },
              parts: [ "You've got a towel, great" ]
            }
          ]
        }
      }
    };

    it('the line is drawn if it is in the inventory', () => {
      const state = {
        pages: [ ],
        inventory: { items: [ { id: 'towel' } ] }
      };

      const nextState = pages(state, action, act);

      expect(nextState.pages[0].lines.length).toEqual(1);
    });

    it('the line is not drawn if it is not in the inventory', () => {
      const state = { pages: [ ], inventory: { items: [ ] } };

      const nextState = pages(state, action, act);

      expect(nextState.pages[0].lines.length).toEqual(0);
    });
  });
});

describe('when a line is drawn', () => {
});
