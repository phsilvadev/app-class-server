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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_1 = require("./entities/user");
const bcrypt = require("bcrypt");
const role_service_1 = require("../role/role.service");
const user_terms_of_use_service_1 = require("../user-terms-of-use/user-terms-of-use.service");
const terms_of_use_service_1 = require("../terms-of-use/terms-of-use.service");
let UserService = class UserService {
    constructor(userRepository, roleService, userTermsOfUseService, termsOfUseService) {
        this.userRepository = userRepository;
        this.roleService = roleService;
        this.userTermsOfUseService = userTermsOfUseService;
        this.termsOfUseService = termsOfUseService;
    }
    findOneEmail(email) {
        return this.userRepository.findOne({
            where: { email: email },
            relations: { role: true },
        });
    }
    async createUser(singUpAuthDto) {
        if (!singUpAuthDto.terms_accepted) {
            throw new common_1.BadRequestException('You must accept the terms to sign up.');
        }
        const group = await this.roleService.findOneName(singUpAuthDto.cip ? 'teacher' : 'user');
        try {
            const user = {
                name: singUpAuthDto.name,
                email: singUpAuthDto.email,
                password: await bcrypt.hash(singUpAuthDto.password, 10),
                role: group,
                cip: singUpAuthDto.cip,
            };
            const userSaver = await this.userRepository.save(user);
            const terms = await this.termsOfUseService.findLast();
            this.userTermsOfUseService.create({
                terms_of_use_id: terms.id,
                userId: userSaver.id,
            });
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException('');
        }
    }
    findOneById(id) {
        return this.userRepository.findOne({
            where: { id: id },
            select: ['id', 'name', 'email', 'role'],
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        role_service_1.RoleService,
        user_terms_of_use_service_1.UserTermsOfUseService,
        terms_of_use_service_1.TermsOfUseService])
], UserService);
//# sourceMappingURL=user.service.js.map