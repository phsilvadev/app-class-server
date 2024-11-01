import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

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
  cref: string;

  @IsNotEmpty()
  @IsBoolean()
  terms_accepted: boolean;
}
