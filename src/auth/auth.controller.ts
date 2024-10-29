import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SingInAuthDto } from './dto/sing-in-auth.dto';
import { SingUpAuthDto } from './dto/sing-up-auth.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  singIn(@Body() singInDto: SingInAuthDto) {
    return this.authService.singIn(singInDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  singInCompany(@Body() singUpAuthDto: SingUpAuthDto) {
    return this.authService.singUp(singUpAuthDto);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Post('perfil')
  findUser(@Request() req) {
    const user = req.user;

    return this.authService.perfil(user);
  }
}
