import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter: {
      reducer(state, action) {
        state.name = action.payload;
      },
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectFilters = state => state.filters.name;
export const filtersReducer = filtersSlice.reducer;