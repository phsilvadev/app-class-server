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
exports.TermsOfUseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const terms_of_use_entity_1 = require("./entities/terms-of-use.entity");
const typeorm_2 = require("typeorm");
let TermsOfUseService = class TermsOfUseService {
    constructor(termsOfUseRepository) {
        this.termsOfUseRepository = termsOfUseRepository;
    }
    async create(createTermsOfUseDto) {
        try {
            await this.termsOfUseRepository.save(createTermsOfUseDto);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    findAll() {
        return this.termsOfUseRepository.find();
    }
    findLast() {
        return this.termsOfUseRepository.findOne({
            where: {},
            order: {
                id: 'DESC',
            },
        });
    }
    findOne(id) {
        return `This action returns a #${id} termsOfUse`;
    }
    update(id, updateTermsOfUseDto) {
        return `This action updates a #${id} termsOfUse`;
    }
    remove(id) {
        return `This action removes a #${id} termsOfUse`;
    }
};
exports.TermsOfUseService = TermsOfUseService;
exports.TermsOfUseService = TermsOfUseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(terms_of_use_entity_1.TermsOfUse)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TermsOfUseService);
//# sourceMappingURL=terms-of-use.service.js.map