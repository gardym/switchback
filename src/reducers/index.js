import Act5 from '../acts/act5';
import inventory from './inventory';
import { pages, mapScriptPageToStatePage } from './pages';
import interaction from './interaction';

const initialInteractionState = {
  firstItem: null,
  secondItem: null
};

const initialInventoryState = {
 items: [
   Act5.items['rubberSportsHand'],
   Act5.items['batteries']
 ]
};

const initialCombinedState = {
  pages: [ mapScriptPageToStatePage(Act5.pages._init, { inventory: initialInventoryState }) ],
  interaction: initialInteractionState,
  inventory: initialInventoryState
};

const storeApp = (state = initialCombinedState, action) => {
  var nextState = Object.assign({}, interaction(state, action));
  nextState = Object.assign({}, inventory(nextState, action, Act5));
  nextState = Object.assign({}, pages(nextState, action, Act5));
  return nextState;
}

export default storeApp;
