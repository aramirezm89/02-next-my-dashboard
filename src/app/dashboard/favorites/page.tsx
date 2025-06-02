
import { PokemonGrid } from "@/pokemons/components/PokemonGrid";

export const metadata = {
  title: "Pokemon favoritos",
  description: "Pokemones favoritos",
};

export default async function PokemonsPage() {

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col items-center justify-center space-x-2 mb-[1.5rem]">
        <span className="font-bold text-[28px]">Listado de pokemones favoritos</span>
        <small>Global state</small>
      </div>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
