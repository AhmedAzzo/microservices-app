import { ApiProperty } from '@nestjs/swagger';
import {
    IsBoolean,
    IsEmail,
    IsMongoId,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsStrongPassword,
} from 'class-validator';
import { Types } from 'mongoose';

export class CreateUserDto {

    id?: string;

    @ApiProperty({
        type: String,
        required: true,
        description: 'user email',
        example: 'test@email.com'
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        type: String,
        required: true,
        description: 'user first name',
        example: 'first name'
    })
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @ApiProperty({
        type: String,
        required: true,
        description: 'user last name',
        example: 'last name'
    })
    @IsString()
    @IsNotEmpty()
    lastName: string;

    @ApiProperty({
        type: String,
        required: true,
        description: 'user position',
        example: 'section manager'
    })
    @IsString()
    @IsNotEmpty()
    position: string;


    @ApiProperty({
        type: String,
        required: false,
        description: 'user image',
        example: 'https://img.freepik.com/free-icon/user_318-159711.jpg'
    })
    @IsString()
    @IsOptional()
    image: string;

    @ApiProperty({
        type: String,
        required: true,
        description: 'user phone number',
        example: '+201111111111'
    })
    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @ApiProperty({
        type: String,
        required: true,
        description: 'user password',
        example: 'test password @1234'
    })
    @IsNotEmpty()
    @IsStrongPassword()
    password: string;

    @ApiProperty({
        type: Boolean,
        required: false,
        description: 'detect if  user is Primary user or not',
        example: true
    })
    @IsBoolean()
    isPrimary: string;

    @ApiProperty({
        type: [Types.ObjectId],
        required: true,
        description: 'Array of MongoDB ObjectIDs, for User Roels',
        example: ['611db0742d0ccf3d0c5c2bdc', '611db0862d0ccf3d0c5c2bdd']
    })
    @IsMongoId({ each: true })
    @IsNotEmpty({ each: true })
    roles?: Types.ObjectId[];

    @ApiProperty({
        type: [Types.ObjectId],
        required: false,
        description: 'Array of MongoDB ObjectIDs, for User Workspaces',
        example: ['611db0742d0ccf3d0c5c2bdc', '611db0862d0ccf3d0c5c2bdd']
    })
    @IsMongoId({ each: true })
    workspaces?: Types.ObjectId[];
}