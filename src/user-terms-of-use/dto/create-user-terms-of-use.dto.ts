import { TermsOfUse } from 'src/terms-of-use/entities/terms-of-use.entity';
import { User } from 'src/user/entities/user';
import { UserTermsOfUse } from '../entities/user-terms-of-use.entity';
import { IsNumber, IsOptional } from 'class-validator';

export class CreateUserTermsOfUseDto implements UserTermsOfUse {
  @IsNumber()
  userId: number;

  @IsNumber()
  terms_of_use_id: number;
}
