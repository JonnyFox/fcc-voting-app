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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const inversify_1 = require("inversify");
const db_service_1 = require("./db.service");
const base_service_1 = require("./base.service");
let PollService = class PollService extends base_service_1.BaseService {
    constructor(dbService) {
        super(dbService);
        this.dbService = dbService;
        this.collectionType = db_service_1.Collections.Polls;
    }
    insert(entity) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            if (entity.votes == null || entity.votes == []) {
                entity.votes = [];
                entity.options.forEach(() => entity.votes.push(0));
            }
            return _super("insert").call(this, entity);
        });
    }
};
PollService = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], PollService);
exports.PollService = PollService;
//# sourceMappingURL=poll.service.js.map