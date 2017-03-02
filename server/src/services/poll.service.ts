import { injectable } from 'inversify';
import { DbService, Collections } from './db.service';
import { Poll } from '../models';
import { BaseService } from './base.service';
import { ObjectID } from "@types/mongodb";

@injectable()
export class PollService extends BaseService<Poll>  {
    constructor(protected dbService: DbService) {
        super(dbService);
        this.collectionType = Collections.Polls;
    }

    public async insert(entity: Poll): Promise<ObjectID> {
        if (entity.votes == null || entity.votes == []) {
            entity.votes = [];
            entity.options.forEach(() => entity.votes.push(0))
        }
        return super.insert(entity);
    }
}
