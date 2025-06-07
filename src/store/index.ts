import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counter/counterSlice';
import { pokemonSlice } from './pokemon/pokemonSlice'; // Assuming you have a pokemon slice, replace with actual pokemon slice
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer, // Assuming you have a pokemon slice, replace with actual pokemon slice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();