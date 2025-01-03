import { MeatItem } from '@/interface/meat.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProductState {
  items: MeatItem[];
}

const initialState: ProductState = {
  items: [],
};

export const meatSlice = createSlice({
  name: 'meat',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<MeatItem>) {
      console.log({ payload: action.payload });

      state.items.push(action.payload);
    },
    deleteItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateItemGrams(
      state,
      { payload }: PayloadAction<{ id: string; newUnits: number }>,
    ) {
      const item = state.items.find((item) => item.id === payload.id)!;
      item.grams = payload.newUnits;
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
export const {
  addItem,
  deleteItem,
  updateItemGrams: updateItemUnits,
  updateItemPrice,
} = meatSlice.actions;

export default meatSlice.reducer;
