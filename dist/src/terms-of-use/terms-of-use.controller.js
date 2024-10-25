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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermsOfUseController = void 0;
const common_1 = require("@nestjs/common");
const terms_of_use_service_1 = require("./terms-of-use.service");
const create_terms_of_use_dto_1 = require("./dto/create-terms-of-use.dto");
const update_terms_of_use_dto_1 = require("./dto/update-terms-of-use.dto");
let TermsOfUseController = class TermsOfUseController {
    constructor(termsOfUseService) {
        this.termsOfUseService = termsOfUseService;
    }
    create(createTermsOfUseDto) {
        return this.termsOfUseService.create(createTermsOfUseDto);
    }
    findAll() {
        return this.termsOfUseService.findAll();
    }
    findOne(id) {
        return this.termsOfUseService.findOne(+id);
    }
    update(id, updateTermsOfUseDto) {
        return this.termsOfUseService.update(+id, updateTermsOfUseDto);
    }
    remove(id) {
        return this.termsOfUseService.remove(+id);
    }
};
exports.TermsOfUseController = TermsOfUseController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_terms_of_use_dto_1.CreateTermsOfUseDto]),
    __metadata("design:returntype", void 0)
], TermsOfUseController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TermsOfUseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TermsOfUseController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_terms_of_use_dto_1.UpdateTermsOfUseDto]),
    __metadata("design:returntype", void 0)
], TermsOfUseController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TermsOfUseController.prototype, "remove", null);
exports.TermsOfUseController = TermsOfUseController = __decorate([
    (0, common_1.Controller)('terms-of-use'),
    __metadata("design:paramtypes", [terms_of_use_service_1.TermsOfUseService])
], TermsOfUseController);
//# sourceMappingURL=terms-of-use.controller.js.map