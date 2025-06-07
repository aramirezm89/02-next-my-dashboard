'use client';

import { PokemonGrid } from "./PokemonGrid";
import { useAppSelector } from "@/store";


export const FavouritesGrid = () => {
const favouritesPokemons = useAppSelector((state) => Object.values(state.pokemons.favorites));


  return (
    <>
      <div className="flex flex-col items-center justify-center space-x-2 mb-[1.5rem]">
        <span className="font-bold text-[28px]">
          Listado de pokemones favoritos
        </span>
        <small>Global state</small>
      </div>
      <PokemonGrid pokemons={favouritesPokemons} />
    </>
  );
}
