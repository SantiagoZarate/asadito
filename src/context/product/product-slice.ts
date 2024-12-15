import { DrinkItem } from '@/interface/product.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProductState {
  items: DrinkItem[];
}

const initialState: ProductState = {
  items: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<DrinkItem>) {
      state.items.push(action.payload);
    },
    deleteItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateItemUnits(
      state,
      { payload }: PayloadAction<{ id: string; newUnits: number }>,
    ) {
      const item = state.items.find((item) => item.id === payload.id)!;
      item.units = payload.newUnits;
    },
    updateItemPrice(
      state,
      { payload }: PayloadAction<{ id: string; newPrice: number }>,
    ) {
      const item = state.items.find((item) => item.id === payload.id)!;
      item.price = payload.newPrice;
    },
  },
});

// Export the generated action creators for use in components
export const { addItem, deleteItem, updateItemUnits, updateItemPrice } =
  productSlice.actions;

export default productSlice.reducer;
