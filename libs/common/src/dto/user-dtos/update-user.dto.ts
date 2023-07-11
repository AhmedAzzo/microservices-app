import { Type } from 'class-transformer';
import {
    IsDefined,
    IsNotEmptyObject,
    IsNumber,
    IsString,
    isString,
    ValidateNested,
} from 'class-validator';

export class UpdateUserDto {
    @IsString()
    email: string;
}
