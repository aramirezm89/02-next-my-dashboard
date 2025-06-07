
import { FavouritesGrid } from "@/pokemons/components/FavouritesGrid";


export const metadata = {
  title: "Pokemon favoritos",
  description: "Pokemones favoritos",
};

export default async function PokemonsPage() {

  return (
    <div className="flex flex-col ">
     <FavouritesGrid />
    </div>
  );
}
