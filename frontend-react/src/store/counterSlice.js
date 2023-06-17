import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => ({ ...state, count: state.count + 1 }),
    decrement: (state) => ({ ...state, count: state.count - 1 }),
    incrementAmount: (state, action) => ({
      ...state,
      count: state.count + action.payload,
    }),
  },
});

export default counterSlice.reducer;

export const { increment, decrement, incrementAmount } = counterSlice.actions;
