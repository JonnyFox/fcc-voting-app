import { Controller, Get, Post, Put, Delete } from 'inversify-express-utils';
import { injectable } from 'inversify';
import { ObjectID } from 'mongodb';
import { Request } from 'express';
import { Poll } from '../models';
import { PollService } from '../services/poll.service';

@injectable()
@Controller('/api/polls')
export class PollController {

  constructor(private pollService: PollService) { }

  @Get('/')
  public async getPolls(): Promise<Poll[]> {
    return await this.pollService.find();
  }

  @Get('/:id')
  public async getPoll(request: Request): Promise<Poll> {
    return await this.pollService.findOneById(request.params.id);
  }

  @Post('/')
  public async newPoll(request: Request): Promise<ObjectID> {
    return this.pollService.insert(request.body);
  }

  @Put('/:id')
  public async updatePoll(request: Request): Promise<Poll> {
    return this.pollService.update(request.params.id, request.body);
  }

  @Delete('/:id')
  public deletePoll(request: Request): Promise<any> {
    return this.pollService.remove(request.params.id);
  }
}
