import { PokemonsService } from "../pokemons.service"
import { PokemonDocument } from "@schemas/pokemon.schema"

export const findAll = async function (this: PokemonsService ): Promise<PokemonDocument[]> {
  
  const pokemons: PokemonDocument[] = await this.pokemonModel.find().exec()

  return pokemons
}