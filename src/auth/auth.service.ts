import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { SingInAuthDto } from './dto/sing-in-auth.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';
import { SingUpAuthDto } from './dto/sing-up-auth.dto';
import { User } from '../user/entities/user';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async singIn(singInDto: SingInAuthDto) {
    console.log(singInDto);

    const user = await this.userService.findOneEmail(singInDto.email);

    if (!user) {
      throw new UnauthorizedException('Usuario ou senha incorreto');
    }

    const has = await bcrypt.compare(singInDto.password, user.password);

    if (!has) {
      throw new UnauthorizedException();
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

  singUp(singUpAuthDto: SingUpAuthDto) {
    this.userService.createUser(singUpAuthDto);
  }

  async reautenticar(refreshToken: string) {
    const playoad = await this.refreshToken(refreshToken);

    return this.gerarToken(playoad);
  }

  private async refreshToken(refreshToken: string) {
    try {
      const user = this.jwtService.decode(refreshToken);
      const usuario = await this.userService.findOneById(user.sub);

      if (!usuario) {
        throw new NotFoundException('Usuário não encontrado');
      }

      const payload = {
        sub: usuario.id,
        username: usuario.name,
        role: [usuario.role ? usuario.role.name : 'user'],
      };

      return payload;
    } catch (err) {
      if (err.name === 'JsonWebTokenError') {
        throw new UnauthorizedException('Assinatura Inválida');
      }
      if (err.name === 'TokenExpiredError') {
        throw new UnauthorizedException('Token Expirado');
      }
      throw new UnauthorizedException(err.name);
    }
  }

  async perfil(user: { sub: number }): Promise<User> {
    return this.userService.findOneById(user.sub);
  }

  gerarToken(payload: any) {
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '1h',
    });

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '8h',
    });
    return { access_token: accessToken, refresh_token: refreshToken };
  }
}
