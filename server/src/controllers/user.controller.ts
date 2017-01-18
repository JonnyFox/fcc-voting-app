import { Controller, Get, Post, Put, Delete } from 'inversify-express-utils';
import { injectable } from 'inversify';
import { ObjectID } from 'mongodb';
import { Request } from 'express';
import { User } from '../models';
import { UserService } from '../services/user.service';

@injectable()
@Controller('/api/users')
export class UserController {

  constructor(private userService: UserService) { }

  @Get('/')
  public async getUsers(): Promise<User[]> {
    return await this.userService.find();
  }

  @Get('/:id')
  public async getUser(request: Request): Promise<User> {
    return await this.userService.findOneById(request.params.id);
  }

  @Post('/')
  public async newUser(request: Request): Promise<ObjectID> {
    return this.userService.insert(request.body);
  }

  @Put('/:id')
  public async updateUser(request: Request): Promise<User> {
    return this.userService.update(request.params.id, request.body);
  }

  @Delete('/:id')
  public deleteUser(request: Request): Promise<any> {
    return this.userService.remove(request.params.id);
  }
}
