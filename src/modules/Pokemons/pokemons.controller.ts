import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { PokemonsService } from './pokemons.service'
import { PokemonDocument } from '@schemas/pokemon.schema'
import { CreatePokemonsDto } from '@dtos/pokemons.dto'

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Get()
  async findAll(): Promise<PokemonDocument[] | []> {
    return await this.pokemonsService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PokemonDocument | null> {
    return await this.pokemonsService.findOne(id)
  }

  @Get('name/:name')
  async findByName(@Param('name') name: string): Promise<PokemonDocument | null> {
    return await this.pokemonsService.findByName(name)
  }

  @Post()
  async create(@Body() pokemons: CreatePokemonsDto): Promise<any[]> {
    return await this.pokemonsService.create(pokemons)
  }
}