'use client';

import Link from "next/link";
import { SimplePokemon } from "../interfaces";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";
import { useAppSelector,useAppDispatch } from "@/store";
import { addFavourite } from "@/store/pokemon/pokemonSlice";
export const PokemonCard = ({ pokemon }: { pokemon: SimplePokemon }) => {
  const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[pokemon.id]);
  const dispatch = useAppDispatch();



  return (
    <div className="bg-white rounded overflow-hidden shadow-lg w-[250px] ">
      <div className="text-center p-6 bg-gray-800 border-b">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
          width={100}
          height={100}
          className="mb-2 mx-auto"
          priority={false}
        />
        <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
          {pokemon.name}
        </p>

        <div className="mt-5">
          <Link
            href={`/dashboard/pokemon/${pokemon.id}`}
            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
          >
            Saber mas
          </Link>
        </div>

        <div className="mt-5">
          <Link
            href={`/dashboard/pokemons/${pokemon.name}`}
            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
          >
            Pokemon por nombre
          </Link>
        </div>
      </div>
      <div className="border-b flex items-center justify-center">
        <button
       
          className="w-full flex items-center justify-center p-4 hover:bg-gray-100 transition-colors duration-200 "
        >
          <div className={`${isFavorite ? "text-green-500" : "text-red-400"} `}>
            <IoHeartOutline onClick={() => dispatch(addFavourite(pokemon))} />
          </div>
          <div className="pl-3">
            <p className="text-sm font-medium text-gray-800 leading-none">
              {isFavorite ? "Es favorito" : "No es favorito"}
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

