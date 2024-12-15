import { configureStore } from '@reduxjs/toolkit';
import productReducer from './product-slice';

export const productsStore = configureStore({ reducer: productReducer });

export type ProductStore = typeof productsStore;
export type RootState = ReturnType<ProductStore['getState']>;
export type ProductDispatch = ProductStore['dispatch'];
