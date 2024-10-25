import { PartialType } from '@nestjs/mapped-types';
import { CreateUserTermsOfUseDto } from './create-user-terms-of-use.dto';

export class UpdateUserTermsOfUseDto extends PartialType(CreateUserTermsOfUseDto) {}
