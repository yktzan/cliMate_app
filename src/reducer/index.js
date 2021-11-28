import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

import AppReducer from './AppReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: [],
};

export default combineReducers({
  app: AppReducer,
});
