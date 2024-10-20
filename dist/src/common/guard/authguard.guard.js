"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthguardGuard = void 0;
const common_1 = require("@nestjs/common");
let AuthguardGuard = class AuthguardGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = request.headers['authorization'];
        const isApiRequest = request.path.startsWith('/api/');
        if (isApiRequest && !token) {
            return false;
        }
        if (!isApiRequest && !token) {
            request.res.redirect('/auth/login');
            return false;
        }
        return false;
    }
};
exports.AuthguardGuard = AuthguardGuard;
exports.AuthguardGuard = AuthguardGuard = __decorate([
    (0, common_1.Injectable)()
], AuthguardGuard);
//# sourceMappingURL=authguard.guard.js.map