import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateSubCategoryDto {
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

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    default: '',
    required: false,
  })
  image: string;

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: '',
    required: true,
  })
  category: Types.ObjectId;

  // TODO add meta interface or type
  @IsOptional()
  meta: any;
}
