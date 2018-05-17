import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../modules';

let store = null; // eslint-disable-line

const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

export const addNavigationListener = createReduxBoundAddListener('root');

if (__DEV__) { // eslint-disable-line
  store = createStore(
    combineReducers(reducers),
    {},
    composeWithDevTools(
      applyMiddleware(navigationMiddleware, thunk),
    ),
  );
} else {
  store = createStore(
    combineReducers(reducers),
    {},
    applyMiddleware(navigationMiddleware, thunk),
  );
}

export default store;
