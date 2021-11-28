import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import ReduxThunk from 'redux-thunk';

import {createLogger} from 'redux-logger';
import rootReducer from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loggerMiddleware = createLogger({});

let middleware = undefined;

middleware = applyMiddleware(ReduxThunk, loggerMiddleware);

// middleware = applyMiddleware(ReduxThunk);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, middleware);

export const persistor = persistStore(store);
