import { injectable } from 'inversify';
import { DbService, Collections } from './db.service';
import { Poll } from '../models';
import { BaseService } from './base.service';

@injectable()
export class PollService extends BaseService<Poll>  {
  constructor(protected dbService: DbService) {
    super(dbService);
    this.collectionType = Collections.Polls;
  }
}
