/* import { createSlice } from '@reduxjs/toolkit'

interface PokemonState {
  pokemons: [];
  loading: false;
  error: null;
  favorites: [];
}

const initialState : PokemonState = {
  pokemons: [],
  loading: false,
  error: null,
  favorites: []
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      const pokemon = action.payload;
      if (!state.favorites.some(fav => fav.id === pokemon.id)) {
        state.favorites.push(pokemon);
      }
    }
  }
});

export const {} = pokemonSlice.actions

export default pokemonSlice.reducer */