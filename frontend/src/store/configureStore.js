import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { setAutoFreeze } from 'immer';
import storage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/lib/storage/session';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import notesReducer from '../reducers/notesReducer';
import filterReducer from '../reducers/filterReducer';

const enhancers = composeWithDevTools(applyMiddleware(thunk));

setAutoFreeze(false);

const persistConfig = {
  key: 'ya-domashka',
  storage,
  blacklist: ['filter'],
};

const filterPersistConfig = {
  key: 'ya-domashka-filter',
  storage: sessionStorage,
  whitelist: ['colors'],
};

const rootReducer = combineReducers({
  filter: persistReducer(filterPersistConfig, filterReducer),
  notes: notesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, enhancers);
const persistor = persistStore(store);

export { store, persistor };
