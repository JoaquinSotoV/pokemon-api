import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type PokemonDocument = Pokemon & Document

@Schema({ timestamps: true })
export class Pokemon {
  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  url: string
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon)
