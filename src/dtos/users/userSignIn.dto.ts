import { IsNotEmpty, IsString } from 'class-validator'

export class UserSignInDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  password: string
}