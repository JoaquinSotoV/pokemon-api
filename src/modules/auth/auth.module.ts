import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UsersModule } from '@modules/users/users.module'
import { JwtModule } from '@nestjs/jwt'
import config from '@config/env/common'
import { APP_GUARD } from '@nestjs/core'
import { AuthGuard } from './auth.guard'

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: config.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
      global: true
    })
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService]
})

export class AuthModule {}