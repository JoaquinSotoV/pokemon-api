import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as bcrypt from 'bcrypt'

const SALT_WORK_FACTOR = 10

export const hashPassword = (password: string): string => {
  const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR)
  return bcrypt.hashSync(password, salt)
}

export type UserDocument = User & Document

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  email: string

  @Prop({ required: false, set: hashPassword })
  password: string

}

export const UserSchema = SchemaFactory.createForClass(User)
