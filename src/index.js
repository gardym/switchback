import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import storeAppFactory from './reducers';

let initialPageId = '_init';
if(document.location.hash !== "") {
  initialPageId = document.location.hash.substring(1);
}

const store = createStore(storeAppFactory(initialPageId));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
