import { configureStore } from '@reduxjs/toolkit';
import drinksReducer from './drinks/drinks-slice';
import meatReducer from './meat/meat-slice';
import peopleReducer from './people/people-slice';

export const productsStore = configureStore({
  reducer: {
    drinks: drinksReducer,
    meat: meatReducer,
    people: peopleReducer,
  },
});

export type ProductStore = typeof productsStore;
export type RootState = ReturnType<ProductStore['getState']>;
export type ProductDispatch = ProductStore['dispatch'];
