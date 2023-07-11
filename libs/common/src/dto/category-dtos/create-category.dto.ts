import { Meta } from '@app/common/modles/shared.schema';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: '',
    required: true,
  })
  name: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    default: '',
    required: false,
  })
  image: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    default: '',
    required: false,
  })
  description: string;

  @IsOptional()
  meta: any
}
