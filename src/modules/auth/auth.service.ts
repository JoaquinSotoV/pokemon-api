import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { signIn } from './services';
import { UserSignInDto } from '@dtos/users/userSignIn.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

  async signIn(userSignInDto: UserSignInDto): Promise<any> {
    return signIn(userSignInDto, this.usersService, this.jwtService);
  }
}
