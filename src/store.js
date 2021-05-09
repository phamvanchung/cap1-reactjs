import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { compose } from 'redux';
// giá trị trả về từ combineReducers
const persistConfig = {
  key: 'root',
  storage,
};

const pReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  pReducer,
  composeWithDevTools(composeEnhancer(applyMiddleware(ReduxThunk))),
);
export const persistor = persistStore(store);