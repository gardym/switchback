import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import Act5 from './acts/act5';

const pages = (state = [ Act5.pages._init ], action) => {
  if(action.type === "ADD_PAGE") {
    return [
      ...state,
      Act5.pages[action.id]
    ];
  }
  return state;
}

let store = createStore(combineReducers({
  pages
}));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
