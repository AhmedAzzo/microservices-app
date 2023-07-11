import { Meta } from '@app/common/modles/shared.schema';
import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Types } from 'mongoose';


export class AddressDto {
    @ApiProperty({
        type: String,
        required: true,
        description: 'address type',
        example: 'dubai workspace address type, example: home, office, etc.'
    })
    @IsString()
    @IsNotEmpty()
    addressType: string;

    @ApiProperty({
        type: String,
        required: true,
        description: 'workspace city',
        example: 'workspace city, example: dubai'
    })
    @IsString()
    @IsNotEmpty()
    city: string;

    @ApiProperty({
        type: String,
        required: true,
        description: 'workspace street',
        example: 'workspace street, example: dubai street'
    })
    @IsString()
    @IsNotEmpty()
    street: string;

    @ApiProperty({
        type: String,
        required: true,
        description: 'workspace province state',
        example: 'workspace province state, example: dubai province state'
    })
    @IsString()
    @IsNotEmpty()
    provinceState: string;

    @ApiProperty({
        type: String,
        required: true,
        description: 'workspace country',
        example: 'workspace country, example: UAE, USA, etc.'
    })
    @IsString()
    @IsNotEmpty()
    country: string;

    @ApiProperty({
        type: String,
        required: true,
        description: 'workspace postalCode',
        example: 'workspace postalCode, example: 123456, 12345, etc.'
    })
    @IsString()
    @IsNotEmpty()
    postalCode: string;

    @ApiProperty({
        type: String,
        required: false,
        description: 'workspace location latitude',
        example: 'workspace location latitude, example: 123456, 12345, etc.'
    })
    @IsString()
    @IsOptional()
    latitude: string;

    @ApiProperty({
        type: String,
        required: false,
        description: 'workspace location longitude',
        example: 'workspace location longitude, example: 123456, 12345, etc.'
    })
    @IsString()
    @IsOptional()
    longitude: string;
}


export class LocationDto {

    @ApiProperty({
        type: String,
        required: true,
        description: 'location name',
        example: 'dubai workspace location'
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        type: String,
        required: true,
        description: 'location description',
        example: 'workspace  location description'
    })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({ type: AddressDto, required: true })
    @IsNotEmpty({ each: true })
    @ValidateNested({ each: true })
    address: AddressDto;
}


export class CreateWorkspaceDto {

    id?: string;

    @ApiProperty({
        type: String,
        required: true,
        description: 'workspace name',
        example: 'dubai workspace'
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        type: String,
        required: true,
        description: 'workspace description',
        example: 'workspace description'
    })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({
        type: [Types.ObjectId],
        default: [],
        required: false,
        description: 'Array of MongoDB ObjectIDs, for User Roels',
        example: ['611db0742d0ccf3d0c5c2bdc', '611db0862d0ccf3d0c5c2bdd']
    })
    @IsMongoId({ each: true })
    @IsNotEmpty({ each: true })
    users: Types.ObjectId[];


    @ApiProperty({ type: LocationDto, required: true })
    @IsNotEmpty({ each: true })
    location: LocationDto;
    meta: Meta;
}
