import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user';
import { RoleModule } from 'src/role/role.module';
import { UserTermsOfUseModule } from 'src/user-terms-of-use/user-terms-of-use.module';
import { TermsOfUseModule } from 'src/terms-of-use/terms-of-use.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    RoleModule,
    UserTermsOfUseModule,
    TermsOfUseModule,
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
