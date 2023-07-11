import { Products } from '@app/common/modles';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class UpdateOrderDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'cocNo',
    required: true,
  })
  cocNo: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'registrationNo',
    required: true,
  })
  registrationNo: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'referenceNo',
    required: true,
  })
  referenceNo: string;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  @ApiProperty({
    type: Date,
    default: new Date(),
    required: true,
  })
  issuanceDate: Date;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  @ApiProperty({
    type: Date,
    default: new Date(),
    required: true,
  })
  expDateOfCoc: Date;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'importer',
    required: true,
  })
  importer: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'importerAddress',
    required: true,
  })
  importerAddress: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'importerCountry',
    required: true,
  })
  importerCountry: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'importerCity',
    required: true,
  })
  importerCity: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'exporter',
    required: true,
  })
  exporter: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'exporterAddress',
    required: true,
  })
  exporterAddress: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'exporterCountry',
    required: true,
  })
  exporterCountry: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'exporterCity',
    required: true,
  })
  exporterCity: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    type: Number,
    default: 1,
    required: true,
  })
  invoiceAmount: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'invoiceCurrency',
    required: true,
  })
  invoiceCurrency: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'invoiceNo',
    required: true,
  })
  invoiceNo: string;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  @ApiProperty({
    type: Date,
    default: new Date(),
    required: true,
  })
  invoiceDate: Date;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'methodOfShipment',
    required: true,
  })
  methodOfShipment: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'countryOfShipment',
    required: true,
  })
  countryOfShipment: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    type: Number,
    default: 1,
    required: true,
  })
  documentNumber: number;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  @ApiProperty({
    type: Date,
    default: new Date(),
    required: true,
  })
  documentDate: Date;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'declaredPointOfEntry',
    required: true,
  })
  declaredPointOfEntry: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'packingDetails',
    required: true,
  })
  packingDetails: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    type: Number,
    default: 1,
    required: true,
  })
  numberAndTypeOfPackages: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'containersOrTruckDetails',
    required: true,
  })
  containersOrTruckDetails: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    type: Number,
    default: 1,
    required: true,
  })
  containersOrTruckAndSealNumbers: number;

  @IsNotEmpty()
  @IsArray()
  @ApiProperty({
    type: Products,
    default: [
      {
        qty: 1,
        goodsValue: '1',
        originAsMarkedOnGoods: '123',
        description: 'string',
        iQStandardNo: '1',
        product: '648b1a483bef2213783d613b',
      },
    ],
    required: true,
  })
  products: Products[];

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'remarks',
    required: true,
  })
  remarks: string;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  @ApiProperty({
    type: Date,
    default: new Date(),
    required: true,
  })
  dateOfAssessment: Date;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    type: Number,
    default: 22,
    required: true,
  })
  invoiceValueInUsd: number;
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    type: Number,
    default: 33,
    required: true,
  })
  declaredValuePerContainer: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'nameAndSignature',
    required: true,
  })
  nameAndSignature: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'officeIssuing',
    required: true,
  })
  officeIssuing: string;

  // // TODO: add images
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'logo',
    required: true,
  })
  logo: string;
}
