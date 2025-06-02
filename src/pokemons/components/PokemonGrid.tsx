import { SimplePokemon } from "../interfaces"
import { PokemonCard } from "./PokemonCard";


export const PokemonGrid = ({ pokemons } : { pokemons: SimplePokemon[] }) => {
  return (
     <div className="grid gap-4 justify-items-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
            {pokemons.map((pokemon) => (
             <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
  )
}
