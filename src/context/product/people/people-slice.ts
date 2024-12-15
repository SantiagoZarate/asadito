import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProductState {
  people: number;
}

const initialState: ProductState = {
  people: 1,
};

export const productSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    updatePeopleCount(state, { payload }: PayloadAction<number>) {
      state.people = payload;
    },
  },
});

// Export the generated action creators for use in components
export const { updatePeopleCount } = productSlice.actions;

export default productSlice.reducer;
