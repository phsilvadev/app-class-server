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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermsOfUse = void 0;
const base_entity_1 = require("../../common/entites/base.entity");
const user_terms_of_use_entity_1 = require("../../user-terms-of-use/entities/user-terms-of-use.entity");
const typeorm_1 = require("typeorm");
let TermsOfUse = class TermsOfUse extends base_entity_1.Base {
};
exports.TermsOfUse = TermsOfUse;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TermsOfUse.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TermsOfUse.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_terms_of_use_entity_1.UserTermsOfUse, (key) => key.termsOfUse),
    __metadata("design:type", user_terms_of_use_entity_1.UserTermsOfUse)
], TermsOfUse.prototype, "userTermsOfUse", void 0);
exports.TermsOfUse = TermsOfUse = __decorate([
    (0, typeorm_1.Entity)('terms-of-use')
], TermsOfUse);
//# sourceMappingURL=terms-of-use.entity.js.map