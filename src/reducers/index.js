import Act5 from '../acts/act1.json';
import Act5Hotspots from '../acts/act1-hotspots';
import items from '../acts/items';

import inventory from './inventory';
import { pages, mapScriptPageToStatePage } from './pages';
import interaction from './interaction';

const currentAct = Object.assign({}, Act5, { hotspots: Act5Hotspots });

const initialInteractionState = {
  firstItem: null,
  secondItem: null
};

const act5InitialItems = [
 items['rubberSportsHand'],
 items['batteries']
];

const initialInventoryState = {
 items: [
 ]
};

const storeAppFactory = (initialPageId) => {
  const initialPageState = [
    mapScriptPageToStatePage(currentAct.pages[initialPageId], {
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
  };

  return storeApp;
};

export default storeAppFactory;
