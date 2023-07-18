import { UserDocument } from '@schemas/user.schema'
import { UsersService } from '../users.service'
import { isObjectIdOrHexString } from 'mongoose'
import { InvalidIdException, UserNotFoundException } from '@exceptions/users/users.exception'

export const findOne = async function (this: UsersService, id: string): Promise<UserDocument> {

  if (!isObjectIdOrHexString(id)) throw new InvalidIdException(id)

  const user: UserDocument = await this.userModel.findById(id)

  if (user === null) throw new UserNotFoundException(id)

  return user
}