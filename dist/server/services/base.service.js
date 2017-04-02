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
const db_service_1 = require("./db.service");
let BaseService = class BaseService {
    constructor(dbService) {
        this.dbService = dbService;
    }
    get collection() {
        return this.dbService.getCollection(this.collectionType);
    }
    ;
    find(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            let collection = yield this.dbService.getCollection(this.collectionType);
            return collection.find(filter).toArray();
        });
    }
    findOneById(objectId) {
        return __awaiter(this, void 0, void 0, function* () {
            let collection = yield this.dbService.getCollection(this.collectionType);
            let items = yield collection.find({ _id: new mongodb_1.ObjectID(objectId) }).limit(1).toArray();
            return items[0];
        });
    }
    insert(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            let collection = yield this.dbService.getCollection(this.collectionType);
            let result = yield collection.insertOne(entity);
            return result.insertedId;
        });
    }
    update(objectId, entity) {
        return __awaiter(this, void 0, void 0, function* () {
            let collection = yield this.dbService.getCollection(this.collectionType);
            delete entity._id;
            yield collection.updateOne({ _id: new mongodb_1.ObjectID(objectId) }, entity);
            return this.findOneById(objectId);
        });
    }
    remove(objectId) {
        return __awaiter(this, void 0, void 0, function* () {
            let collection = yield this.dbService.getCollection(this.collectionType);
            return collection.deleteOne({ _id: new mongodb_1.ObjectID(objectId) });
        });
    }
};
BaseService = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], BaseService);
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map