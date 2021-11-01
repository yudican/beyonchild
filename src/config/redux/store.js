import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import allReducer from './reducers';
import SagaWatcher from './sagas';
const Saga = createSagaMiddleware();
const Store = createStore(allReducer, applyMiddleware(Saga, logger));

Saga.run(SagaWatcher);
export default Store;
