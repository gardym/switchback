import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import Act5 from './acts/act5';

const mapScriptPageToStatePage = page => {
  return {
    id: page.id,
    lines: page.lines.map((l, idx) => {
      return {
        hidden: idx !== 0,
        drawing: idx === 0,
        drawn: false,
        parts: l.parts
      }
    })
  }
};

const drawNextLine = (lines, idx) => {
  return lines.map((l, i) => {
    if(i === idx) {
      return {
        parts: l.parts,
        drawn: true,
        drawing: false,
        hidden: false
      }
    } else if(i === idx + 1) {
      return {
        parts: l.parts,
        drawn: false,
        drawing: true,
        hidden: false
      }
    } else {
      return l
    }
  });
}

const pages = (state = [ mapScriptPageToStatePage(Act5.pages._init) ], action) => {
  if(action.type === "ADD_PAGE") {
    return [
      ...state,
      mapScriptPageToStatePage(Act5.pages[action.id])
    ];
  } else if(action.type === "DRAW_NEXT_LINE") {
    return state.map(p => {
      if(p.id === action.pageId) {
        return {
          id: p.id,
          lines: drawNextLine(p.lines, action.idx)
        }
      }
      return p;
    });
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
