import { Module } from '@nestjs/common';
import { TermsOfUseService } from './terms-of-use.service';
import { TermsOfUseController } from './terms-of-use.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TermsOfUse } from './entities/terms-of-use.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TermsOfUse])],
  controllers: [TermsOfUseController],
  providers: [TermsOfUseService],
  exports: [TermsOfUseService],
})
export class TermsOfUseModule {}
