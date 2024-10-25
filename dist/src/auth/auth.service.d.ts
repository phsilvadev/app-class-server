import { SingInAuthDto } from './dto/sing-in-auth.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SingUpAuthDto } from './dto/sing-up-auth.dto';
import { User } from '../user/entities/user';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    singIn(singInDto: SingInAuthDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    singUp(singUpAuthDto: SingUpAuthDto): void;
    reautenticar(refreshToken: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    private refreshToken;
    perfil(user: {
        sub: number;
    }): Promise<User>;
    gerarToken(payload: any): {
        access_token: string;
        refresh_token: string;
    };
}
