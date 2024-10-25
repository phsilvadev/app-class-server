import {
  IsBoolean,
  IsNegative,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class SingUpAuthDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  cip: string;

  @IsNotEmpty()
  @IsBoolean()
  terms_accepted: boolean;
}
