import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common'
import { AuthService } from './auth.service'
import { User } from '@schemas/user.schema'
import { UserSignInDto } from '@dtos/users/userSignIn.dto'
import { Public } from './services/decorators/public.decorator'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  signIn(@Body() user: UserSignInDto): Promise<User> {
    return this.authService.signIn(user)
  }

  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }
}