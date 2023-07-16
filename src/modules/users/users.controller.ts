import { Controller, Get, Post, Body, Param, Delete, Put, Patch } from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from '@schemas/user.schema'
import { CreateUserDto } from '@dtos/users/userCreation.dto'
// import { UpdateUserDto } from './dto/update-user.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto)
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll()
  }

  // @Get(':id')
  // findOne(@Param('id') id: string): Promise<User> {
  //   return this.usersService.findOne(id)
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
  //   return this.usersService.update(id, updateUserDto)
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string): Promise<User> {
  //   return this.usersService.remove(id)
  // }
}