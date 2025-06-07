import { SimplePokemon } from "@/pokemons/interfaces";
import { createSlice } from "@reduxjs/toolkit";

interface PokemonState {
  pokemons: SimplePokemon[];
  loading: false;
  error: null;
  favorites: SimplePokemon[];
}

const initialState: PokemonState = {
  pokemons: [],
  loading: false,
  error: null,
  favorites: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      const pokemon = action.payload;
      if (
        !state.favorites.some((fav) => fav.id === pokemon.id)
      ) {
        state.favorites.push(pokemon);
      }
    },

    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
  },
});

export const {} = pokemonSlice.actions;

export default pokemonSlice.reducer;
