import { UsersService } from "../users.service"
import { UserDocument } from "@schemas/user.schema"

export const findAll = async function (this: UsersService ): Promise<UserDocument[]> {
    
    const users: UserDocument[] = await this.userModel.find().exec()
  
    return users
  }