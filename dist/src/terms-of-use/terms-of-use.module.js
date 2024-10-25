"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermsOfUseModule = void 0;
const common_1 = require("@nestjs/common");
const terms_of_use_service_1 = require("./terms-of-use.service");
const terms_of_use_controller_1 = require("./terms-of-use.controller");
const typeorm_1 = require("@nestjs/typeorm");
const terms_of_use_entity_1 = require("./entities/terms-of-use.entity");
let TermsOfUseModule = class TermsOfUseModule {
};
exports.TermsOfUseModule = TermsOfUseModule;
exports.TermsOfUseModule = TermsOfUseModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([terms_of_use_entity_1.TermsOfUse])],
        controllers: [terms_of_use_controller_1.TermsOfUseController],
        providers: [terms_of_use_service_1.TermsOfUseService],
        exports: [terms_of_use_service_1.TermsOfUseService],
    })
], TermsOfUseModule);
//# sourceMappingURL=terms-of-use.module.js.map