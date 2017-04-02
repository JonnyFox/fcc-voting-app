"use strict";
require("reflect-metadata");
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
const services_1 = require("../services");
const controllers_1 = require("../controllers");
let container = new inversify_1.Kernel();
container.bind(services_1.ConfigService).toSelf().inSingletonScope();
container.bind(services_1.DbService).toSelf();
container.bind(services_1.UserService).toSelf();
container.bind(services_1.PollService).toSelf();
container.bind(inversify_express_utils_1.TYPE.Controller).to(controllers_1.UserController).whenTargetNamed('UserController');
container.bind(inversify_express_utils_1.TYPE.Controller).to(controllers_1.PollController).whenTargetNamed('PollController');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = container;
//# sourceMappingURL=inversify.conf.js.map