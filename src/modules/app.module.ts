import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { PokemonsModule } from './pokemons/pokemons.module'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import config from '@config/env/common'
import { APP_GUARD } from '@nestjs/core'
import { AuthGuard } from './auth/auth.guard'

@Module({
  imports: [
    MongooseModule.forRoot(config.DATABASE ?? ''),
    PokemonsModule,
    UsersModule,
    AuthModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ]
})
export class AppModule {}
