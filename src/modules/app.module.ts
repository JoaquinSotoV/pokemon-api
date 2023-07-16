import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { PokemonsModule } from './Pokemons/pokemons.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE ?? ''),
    PokemonsModule,
    UsersModule,
  ]
})
export class AppModule {}
