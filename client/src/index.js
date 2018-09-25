import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {collections as collectionsReducer} from './reducers';
import {addCollection} from './actions';
import watchRoot from './sagas';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';


import App from './App';
import './styles.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(collectionsReducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(watchRoot);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
