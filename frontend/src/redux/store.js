import { configureStore } from '@reduxjs/toolkit';
import productSlice from './features/productSlice';
import creatorSlice from './features/creatorSlice';
import devSlice from './features/devSlice';

// import AuthProvider from '../hooks/useFirebase';

export const store = configureStore({
  reducer: {
    products: productSlice,
    creators: creatorSlice,
    dev: devSlice,
    // auth:AuthProvider(),
  },
})