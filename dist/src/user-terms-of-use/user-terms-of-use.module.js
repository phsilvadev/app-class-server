"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTermsOfUseModule = void 0;
const common_1 = require("@nestjs/common");
const user_terms_of_use_service_1 = require("./user-terms-of-use.service");
const user_terms_of_use_controller_1 = require("./user-terms-of-use.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_terms_of_use_entity_1 = require("./entities/user-terms-of-use.entity");
let UserTermsOfUseModule = class UserTermsOfUseModule {
};
exports.UserTermsOfUseModule = UserTermsOfUseModule;
exports.UserTermsOfUseModule = UserTermsOfUseModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_terms_of_use_entity_1.UserTermsOfUse])],
        controllers: [user_terms_of_use_controller_1.UserTermsOfUseController],
        providers: [user_terms_of_use_service_1.UserTermsOfUseService],
        exports: [user_terms_of_use_service_1.UserTermsOfUseService],
    })
], UserTermsOfUseModule);
//# sourceMappingURL=user-terms-of-use.module.js.map