import { IsNotEmpty, IsString } from 'class-validator';

export class SingInAuthDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
