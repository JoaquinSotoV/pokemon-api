import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User, UserDocument } from '@schemas/user.schema'
import { findAll, create, findOne, findByName } from '@modules/users/services'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) protected readonly userModel: Model<UserDocument>) {}

  findAll = findAll.bind(this)

  create = create.bind(this)

  findOne = findOne.bind(this)

  findByName = findByName.bind(this)
}