import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Get,
  Render,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @HttpCode(HttpStatus.OK)
  // @Get('login')
  // @Render('login')
  // login() {
  //   return { layout: 'empty-layout', message: 'Login' };
  //   // return this.authService.signIn(signInDto.username, signInDto.password);
  // }

  @Post('login')
  login(@Body() param: any) {
    console.log(param);
  }
}
