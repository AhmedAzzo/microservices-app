import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class UpdateSubCategoryDto {
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

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: '',
    required: true,
  })
  category: Types.ObjectId;;
}
