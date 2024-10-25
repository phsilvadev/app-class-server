import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from 'data-source';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { TermsOfUseModule } from './terms-of-use/terms-of-use.module';
import { UserTermsOfUseModule } from './user-terms-of-use/user-terms-of-use.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ...AppDataSource.options,
    }),
    AuthModule,
    UserModule,
    RoleModule,
    TermsOfUseModule,
    UserTermsOfUseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
