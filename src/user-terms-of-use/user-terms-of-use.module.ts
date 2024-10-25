import { Module } from '@nestjs/common';
import { UserTermsOfUseService } from './user-terms-of-use.service';
import { UserTermsOfUseController } from './user-terms-of-use.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTermsOfUse } from './entities/user-terms-of-use.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserTermsOfUse])],
  controllers: [UserTermsOfUseController],
  providers: [UserTermsOfUseService],
  exports: [UserTermsOfUseService],
})
export class UserTermsOfUseModule {}
