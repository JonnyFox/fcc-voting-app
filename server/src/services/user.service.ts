import { injectable } from 'inversify';
import { DbService, Collections } from './db.service';
import { User } from '../models';
import { BaseService } from './base.service';

@injectable()
export class UserService extends BaseService<User>  {
  constructor(protected dbService: DbService) {
    super(dbService);
    this.collectionType = Collections.Users;
  }
}
