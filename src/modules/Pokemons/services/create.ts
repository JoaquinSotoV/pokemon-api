import { CreatePokemonDto, CreatePokemonsDto } from "@dtos/pokemons.dto"
import { PokemonsService } from "../pokemons.service"
import { PokemonDocument } from "@schemas/pokemon.schema"

export const create = async function (this: PokemonsService, pokemons: CreatePokemonsDto): Promise<PokemonDocument> {

  const pokemonsToInsert: CreatePokemonDto[] = pokemons.pokemons

  const pokemonsCreated: any = await this.pokemonModel.insertMany(pokemonsToInsert)

  return pokemonsCreated
}