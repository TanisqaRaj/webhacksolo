import { configureStore } from '@reduxjs/toolkit';
import generalReducer from '../reduxslice/generalSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Local storage (can be changed to sessionStorage, etc.)
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedgeneralReducer = persistReducer(persistConfig, generalReducer);

export const store = configureStore({
  reducer: {
    general:persistedgeneralReducer
  },
});

export const persistor = persistStore(store);

export default store;