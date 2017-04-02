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
const mongodb_1 = require("mongodb");
const inversify_1 = require("inversify");
const config_service_1 = require("./config.service");
(function (Collections) {
    Collections[Collections["Users"] = 0] = "Users";
    Collections[Collections["Votes"] = 1] = "Votes";
    Collections[Collections["Polls"] = 2] = "Polls";
})(exports.Collections || (exports.Collections = {}));
var Collections = exports.Collections;
let DbService = class DbService {
    constructor(configService) {
        this.configService = configService;
    }
    getCollection(collection) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.db) {
                this.db = yield this.init();
            }
            return this.db.collection(Collections[collection]);
        });
    }
    init() {
        try {
            return mongodb_1.MongoClient.connect(this.configService.db.uri);
        }
        catch (err) {
            console.error(err);
            process.exit(-1);
        }
    }
};
DbService = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], DbService);
exports.DbService = DbService;
//# sourceMappingURL=db.service.js.map