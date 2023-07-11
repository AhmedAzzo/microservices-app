import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: 'name',
    required: true,
  })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    default: 'description',
    required: false,
  })
  description: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: '123',
    required: true,
  })
  code: string;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    default: 1,
    required: true,
  })
  price: number;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    default: 1,
    required: true,
  })
  qty: number;

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: '$',
    required: true,
  })
  currency: string;

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: '648b1a483bef2213783d613b',
    required: true,
  })
  subCategory: string;
}
