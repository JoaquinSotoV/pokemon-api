import { UserDocument } from "@schemas/user.schema"
import { UsersService } from "../users.service"

export const findByName = async function (this: UsersService, name: string): Promise<UserDocument> {
  const user: UserDocument = await this.userModel.findOne({ name }).lean()

  return user
}