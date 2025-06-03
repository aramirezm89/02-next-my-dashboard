import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
  isReady: boolean; // Optional property to indicate readiness
}

const initialState: CounterState = {
  count:   0, // Initialize from localStorage if available
  isReady: false
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      state.count += 1;
      localStorage.setItem("count", JSON.stringify(state.count)); // Save to localStorage
    },
    decrement: (state: CounterState) => {
      state.count -= 1;
      localStorage.setItem("count", JSON.stringify(state.count)); // Save to localStorage
    },
    reset: (state: CounterState) => {
      state.count = 0;
      localStorage.setItem("count", JSON.stringify(state.count)); // Save to localStorage
    },
    setCount: (state: CounterState, action: PayloadAction<number>) => {
      if(state.isReady) return;
      state.count = action.payload;
      state.isReady = true; // Set isReady to true after the first count is set
      localStorage.setItem('count', JSON.stringify(state.count)); // Save to localStorage
    },
  }
});

export const { increment, decrement, reset, setCount } = counterSlice.actions;
