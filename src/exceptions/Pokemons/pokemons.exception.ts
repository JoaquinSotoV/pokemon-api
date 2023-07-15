import { HttpException, HttpStatus } from '@nestjs/common'

export class PokemonNotFoundException extends HttpException {
  constructor(name: string) {
    super(`Pokemon with name '${name}' not found`, HttpStatus.NOT_FOUND)
  }
}

export class PokemonIdNotFoundException extends HttpException {
  constructor(id: string) {
    super(`Pokemon with id '${id}' not found`, HttpStatus.NOT_FOUND)
  }
}

export class InvalidIdException extends HttpException {
  constructor(id: string) {
    super(`Invalid id '${id}'`, HttpStatus.BAD_REQUEST)
  }
}