import { SimplePokemon } from "@/pokemons/interfaces";
import { PokemonResponse } from "@/pokemons/interfaces";
import { PokemonGrid } from "@/pokemons/components/PokemonGrid";

export const metadata = {
  title: "Pokemons",
  description: "Pokemons",
};
const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  });

  const pokemons = data.results.map((pokemon) => {
    const id = Number(pokemon.url.split("/").at(-2)); // Extracting the ID from the URL and converting to number
    
    return {
      id,
      name: pokemon.name,
    };
  });

  return pokemons;
};
export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col items-center justify-center space-x-2 mb-[1.5rem]">
        <span className="font-bold text-[28px]">Listado de pokemons</span>
        <small>estático</small>
      </div>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
