import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Pokemon, PokemonDocument } from '@schemas/pokemon.schema'
import { findAll, findOne, findByName, create } from './services'

@Injectable()
export class PokemonsService {
  constructor(
    @InjectModel(Pokemon.name) protected readonly pokemonModel: Model<PokemonDocument>,
  ) {}

  findAll = findAll.bind(this)

  findOne = findOne.bind(this)

  findByName = findByName.bind(this)

  create = create.bind(this)
}