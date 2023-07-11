import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    type: String,
    required: true,
    description: 'user email',
    example: 'test@mailinator.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'user password',
    example: 'Aahmed@123',
  })
  @IsNotEmpty()
  password: string;
}
