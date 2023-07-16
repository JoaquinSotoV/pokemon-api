import { Type } from "class-transformer";
import { IsString, IsNotEmpty, IsArray, ArrayNotEmpty, ValidateNested } from "class-validator";

export class CreatePokemonDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string

  @IsString()
  @IsNotEmpty()
  readonly url: string
}

export class CreatePokemonsDto {
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreatePokemonDto)
  pokemons: CreatePokemonDto[]
}