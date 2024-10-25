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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async singIn(singInDto) {
        const user = await this.userService.findOneEmail(singInDto.email);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        const has = await bcrypt.compare(singInDto.password, user.password);
        if (!has) {
            throw new common_1.UnauthorizedException();
        }
        const payload = {
            sub: user.id,
            role: [user.role ? user.role.name : 'user'],
        };
        return {
            access_token: this.gerarToken(payload).access_token,
            refresh_token: this.gerarToken(payload).refresh_token,
        };
    }
    singUp(singUpAuthDto) {
        this.userService.createUser(singUpAuthDto);
    }
    async reautenticar(refreshToken) {
        const playoad = await this.refreshToken(refreshToken);
        return this.gerarToken(playoad);
    }
    async refreshToken(refreshToken) {
        try {
            const user = this.jwtService.decode(refreshToken);
            const usuario = await this.userService.findOneById(user.sub);
            if (!usuario) {
                throw new common_1.NotFoundException('Usuário não encontrado');
            }
            const payload = {
                sub: usuario.id,
                username: usuario.name,
                role: [usuario.role ? usuario.role.name : 'user'],
            };
            return payload;
        }
        catch (err) {
            if (err.name === 'JsonWebTokenError') {
                throw new common_1.UnauthorizedException('Assinatura Inválida');
            }
            if (err.name === 'TokenExpiredError') {
                throw new common_1.UnauthorizedException('Token Expirado');
            }
            throw new common_1.UnauthorizedException(err.name);
        }
    }
    async perfil(user) {
        return this.userService.findOneById(user.sub);
    }
    gerarToken(payload) {
        const accessToken = this.jwtService.sign(payload, {
            expiresIn: '1h',
        });
        const refreshToken = this.jwtService.sign(payload, {
            expiresIn: '8h',
        });
        return { access_token: accessToken, refresh_token: refreshToken };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map