import { Meta } from '@app/common/modles/shared.schema';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Types } from 'mongoose';

export class CreateReleaseDto {
  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: '648b1a483bef2213783d613b',
    required: true,
  })
  order: Types.ObjectId;

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: 'nameImporter',
    required: true,
  })
  nameImporter: string;

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: 'entryPoint',
    required: true,
  })
  entryPoint: string;

  @IsOptional()
  @ApiProperty({
    type: String,
    default: 'detailsPackagesContainers',
    required: false,
  })
  detailsPackagesContainers: string;

  @IsOptional()
  @ApiProperty({
    type: String,
    default: 'importDocumentsNotMentionedCertificate',
    required: false,
  })
  importDocumentsNotMentionedCertificate: string;

  @IsOptional()
  @ApiProperty({
    type: String,
    default: 'numberOfLineItems',
    required: false,
  })
  numberOfLineItems: string;

  @IsEnum(['Packages', 'Trucks', 'Partial Container', 'FullContainer'])
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: 'Packages',
    required: true,
    enum: ['Packages', 'Trucks', 'Partial Container', 'FullContainer'],
  })
  shipmentType: string;

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: 'shipmentDetails',
    required: true,
  })
  shipmentDetails: string;

  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    default: 1,
    required: true,
  })
  totalQuantity: number;
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    default: 1,
    required: true,
  })
  incomingQuantity: number;
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    default: 1,
    required: true,
  })
  leftoverQuantity: number;

  @IsOptional()
  @ApiProperty({
    type: String,
    default: 'comments',
    required: false,
  })
  comments: string;

  @IsOptional()
  @ApiProperty({
    type: String,
    default: 'companyUsualDisclaimer',
    required: false,
  })
  companyUsualDisclaimer: string;

  @IsOptional()
  @ApiProperty({
    type: String,
    default: 'name',
    required: true,
  })
  name: string;

  @IsOptional()
  meta: any;
}
