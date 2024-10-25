import { AuthService } from './auth.service';
import { SingInAuthDto } from './dto/sing-in-auth.dto';
import { SingUpAuthDto } from './dto/sing-up-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    singIn(singInDto: SingInAuthDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    singInCompany(singUpAuthDto: SingUpAuthDto): void;
    findUser(req: any): Promise<import("../user/entities/user").User>;
}
