import Act5 from '../acts/act5.json';
import Act5Hotspots from '../acts/act5-hotspots';
import items from '../acts/items';

import inventory from './inventory';
import { pages, mapScriptPageToStatePage } from './pages';
import interaction from './interaction';

const currentAct = Object.assign({}, Act5, { hotspots: Act5Hotspots });

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
  mapScriptPageToStatePage(currentAct.pages._init, {
    inventory: initialInventoryState
  })
];

const initialCombinedState = {
  pages: initialPageState,
  interaction: initialInteractionState,
  inventory: initialInventoryState
};

const storeApp = (state = initialCombinedState, action) => {
  let nextState = Object.assign({}, interaction(state, action, currentAct, items));
  nextState = Object.assign({}, inventory(nextState, action, items));
  nextState = Object.assign({}, pages(nextState, action, currentAct));
  return nextState;
}

export default storeApp;
