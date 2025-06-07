import { SimplePokemon } from "@/pokemons/interfaces";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface PokemonState {
 favorites:  {[key: string]: SimplePokemon};
}

/* const getInitalState = () : PokemonState => {
  const favourites = localStorage.getItem("favourites");
  if (favourites) {
    return JSON.parse(favourites);
  }
  return {};
};
 */
const initialState: PokemonState = {
  favorites: {}
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {

  addFavourite: (state, action: PayloadAction<SimplePokemon>) => {
    const { payload } = action;
    if (state.favorites[payload.id]) {
      delete state.favorites[payload.id];
    } else {
      state.favorites[payload.id] = payload;
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(state.favorites)
    );
  },

  setFavorites: (state, action: PayloadAction<{ [key: string]: SimplePokemon }>) => {
    state.favorites = action.payload;
   
  }
  
  }

});

export const {addFavourite, setFavorites } = pokemonSlice.actions;
