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
exports.UserTermsOfUse = void 0;
const terms_of_use_entity_1 = require("../../terms-of-use/entities/terms-of-use.entity");
const user_1 = require("../../user/entities/user");
const typeorm_1 = require("typeorm");
let UserTermsOfUse = class UserTermsOfUse {
};
exports.UserTermsOfUse = UserTermsOfUse;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserTermsOfUse.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserTermsOfUse.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserTermsOfUse.prototype, "terms_of_use_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], UserTermsOfUse.prototype, "accepted_at", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    (0, typeorm_1.OneToMany)(() => user_1.User, (key) => key.userTermsOfUse),
    __metadata("design:type", user_1.User)
], UserTermsOfUse.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'terms_of_use_id' }),
    (0, typeorm_1.OneToMany)(() => terms_of_use_entity_1.TermsOfUse, (key) => key.userTermsOfUse),
    __metadata("design:type", terms_of_use_entity_1.TermsOfUse)
], UserTermsOfUse.prototype, "termsOfUse", void 0);
exports.UserTermsOfUse = UserTermsOfUse = __decorate([
    (0, typeorm_1.Entity)('user-terms-of-use')
], UserTermsOfUse);
//# sourceMappingURL=user-terms-of-use.entity.js.map