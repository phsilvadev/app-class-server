import { PartialType } from '@nestjs/mapped-types';
import { CreateTermsOfUseDto } from './create-terms-of-use.dto';

export class UpdateTermsOfUseDto extends PartialType(CreateTermsOfUseDto) {}
