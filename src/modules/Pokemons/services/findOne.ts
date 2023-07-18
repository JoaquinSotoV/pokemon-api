import { InvalidIdException, PokemonIdNotFoundException } from "@exceptions/pokemons/pokemons.exception"
import { PokemonsService } from "../pokemons.service"
import { PokemonDocument } from "@schemas/pokemon.schema"
import { isObjectIdOrHexString } from "mongoose"

export const findOne = async function (this: PokemonsService, id: string): Promise<PokemonDocument | null> {

  //validate if id is a valid ObjectId
  if (!isObjectIdOrHexString(id)) throw new InvalidIdException(id)

  const pokemon: PokemonDocument = await this.pokemonModel.findById(id).exec()

  if (pokemon === null) {
    throw new PokemonIdNotFoundException(id)
  }

  return pokemon
}