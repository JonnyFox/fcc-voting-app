import 'reflect-metadata';
import { Kernel } from 'inversify';
import { interfaces, Controller, TYPE } from 'inversify-express-utils';
import { ConfigService, DbService, UserService, PollService } from '../services';
import { UserController, PollController } from '../controllers';

let container = new Kernel();
container.bind<ConfigService>(ConfigService).toSelf().inSingletonScope();
container.bind<DbService>(DbService).toSelf();
container.bind<UserService>(UserService).toSelf();
container.bind<PollService>(PollService).toSelf();
container.bind<interfaces.Controller>(TYPE.Controller).to(UserController).whenTargetNamed('UserController');
container.bind<interfaces.Controller>(TYPE.Controller).to(PollController).whenTargetNamed('PollController');
export default container;
