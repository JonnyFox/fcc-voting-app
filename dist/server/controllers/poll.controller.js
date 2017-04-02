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
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
const poll_service_1 = require("../services/poll.service");
let PollController = class PollController {
    constructor(pollService) {
        this.pollService = pollService;
    }
    getPolls() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pollService.find();
        });
    }
    getPoll(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pollService.findOneById(request.params.id);
        });
    }
    newPoll(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.pollService.insert(request.body);
        });
    }
    updatePoll(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.pollService.update(request.params.id, request.body);
        });
    }
    deletePoll(request) {
        return this.pollService.remove(request.params.id);
    }
};
__decorate([
    inversify_express_utils_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PollController.prototype, "getPolls", null);
__decorate([
    inversify_express_utils_1.Get('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PollController.prototype, "getPoll", null);
__decorate([
    inversify_express_utils_1.Post('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PollController.prototype, "newPoll", null);
__decorate([
    inversify_express_utils_1.Put('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PollController.prototype, "updatePoll", null);
__decorate([
    inversify_express_utils_1.Delete('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PollController.prototype, "deletePoll", null);
PollController = __decorate([
    inversify_1.injectable(),
    inversify_express_utils_1.Controller('/api/polls'),
    __metadata("design:paramtypes", [poll_service_1.PollService])
], PollController);
exports.PollController = PollController;
//# sourceMappingURL=poll.controller.js.map