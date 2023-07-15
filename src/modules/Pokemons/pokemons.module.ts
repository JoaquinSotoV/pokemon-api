import { Module } from '@nestjs/common'
import { PokemonsController } from './pokemons.controller'
import { PokemonsService } from './pokemons.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Pokemon, PokemonSchema } from '@schemas/pokemon.schema'

@Module({
  controllers: [PokemonsController],
  providers: [PokemonsService],
  imports: [
    MongooseModule.forFeature([{ name: Pokemon.name, schema: PokemonSchema }]),
  ],
})

export class PokemonsModule {}