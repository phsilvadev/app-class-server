import { TermsOfUse } from '../entities/terms-of-use.entity';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTermsOfUseDto implements TermsOfUse {
  @IsNotEmpty()
  @IsString()
  version: string;

  @IsNotEmpty()
  @IsString()
  content: string;
}
