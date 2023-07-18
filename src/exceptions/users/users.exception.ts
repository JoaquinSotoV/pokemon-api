import { HttpException, HttpStatus } from '@nestjs/common'

export class UserNotFoundException extends HttpException {
  constructor(id: string) {
    super(`User with id '${id}' not found`, HttpStatus.NOT_FOUND)
  }
}

export class InvalidIdException extends HttpException {
  constructor(id: string) {
    super(`'${id}' is not a valid ObjectId`, HttpStatus.BAD_REQUEST)
  }
}