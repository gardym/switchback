import Act5 from '../acts/act5';
import items from '../acts/items';

import inventory from './inventory';
import { pages, mapScriptPageToStatePage } from './pages';
import interaction from './interaction';

const initialInteractionState = {
  firstItem: null,
  secondItem: null
};

const initialInventoryState = {
 items: [
   items['rubberSportsHand'],
   items['batteries']
 ]
};

const initialPageState = [
  mapScriptPageToStatePage(Act5.pages._init, {
    inventory: initialInventoryState
  })
];

const initialCombinedState = {
  pages: initialPageState,
  interaction: initialInteractionState,
  inventory: initialInventoryState
};

const storeApp = (state = initialCombinedState, action) => {
  let nextState = Object.assign({}, interaction(state, action, Act5, items));
  nextState = Object.assign({}, inventory(nextState, action, items));
  nextState = Object.assign({}, pages(nextState, action, Act5));
  return nextState;
}

export default storeApp;
