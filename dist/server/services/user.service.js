"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inversify_1 = require("inversify");
const db_service_1 = require("./db.service");
const base_service_1 = require("./base.service");
let UserService = class UserService extends base_service_1.BaseService {
    constructor(dbService) {
        super(dbService);
        this.dbService = dbService;
        this.collectionType = db_service_1.Collections.Users;
    }
};
UserService = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map