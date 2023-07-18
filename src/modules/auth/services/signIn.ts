import { UserDocument } from "@schemas/user.schema"
import { UsersService } from "@modules/users/users.service"
import { UnauthorizedException } from "@nestjs/common"
import * as bcrypt from 'bcrypt'
import { UserSignInDto } from "@dtos/users/userSignIn.dto"
import { JwtService } from "@nestjs/jwt"

export const signIn = async function (user: UserSignInDto, usersService: UsersService, jwtService: JwtService): Promise<any> {

  const { name, password }: { name: string, password: string } = user

  const userFound: UserDocument = await usersService.findByName(name)
  if (!userFound) {
    throw new UnauthorizedException()
  }

  const isPasswordValid = await bcrypt.compare(password, userFound.password)

  if (!isPasswordValid) {
    throw new UnauthorizedException()
  }

  const payload = { sub: userFound._id, ...userFound }

  return {
    access_token: await jwtService.signAsync(payload)
  }
}