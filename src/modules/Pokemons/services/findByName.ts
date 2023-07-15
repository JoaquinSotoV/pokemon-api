import { PokemonNotFoundException } from "@exceptions/Pokemons/pokemons.exception";
import { PokemonsService } from "../pokemons.service";
import { PokemonDocument } from "@schemas/pokemon.schema";

export const findByName = async function (this: PokemonsService, name: string): Promise<PokemonDocument | null> {

  const lowerCaseName = name.toLowerCase()

  const pokemon: PokemonDocument = await this.pokemonModel.findOne({ name: lowerCaseName }).exec()

  if (pokemon === null) {
    throw new PokemonNotFoundException(name)
  }

  return pokemon
}