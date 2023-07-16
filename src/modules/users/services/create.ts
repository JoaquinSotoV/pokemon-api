import { CreateUserDto } from '@dtos/users/userCreation.dto';
import { User } from '@schemas/user.schema';
import { UsersService } from '../users.service';

export const create = async function (this: UsersService, createUserDto: CreateUserDto): Promise<User> {
  const userCreated: User = await this.userModel.create(createUserDto);
  return userCreated;
}
