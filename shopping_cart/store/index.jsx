import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/ProductSlice';
import cartReducer from './slices/CartSlice';


export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

// console.log('Initial State:', store.getState());

// // Subscribe to store changes and log them
// const unsubscribe = store.subscribe(() => {
//   console.log('State Updated:', store.getState());
// });
