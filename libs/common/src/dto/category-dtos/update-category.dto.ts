import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCategoryDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: '',
    required: true,
  })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    default: '',
    required: false,
  })
  description: string;
}
