import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email?: string;

  @IsString()
  password?: string;

//   @IsString()
//   @Length(3, 50)
//   username?: string;

  @IsString()
  @Length(11, 11)
  phoneNumber: string;
}
