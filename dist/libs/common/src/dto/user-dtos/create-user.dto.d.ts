import { Types } from 'mongoose';
export declare class CreateUserDto {
    id?: string;
    email: string;
    firstName: string;
    lastName: string;
    position: string;
    image: string;
    phoneNumber: string;
    password: string;
    isPrimary: string;
    roles?: Types.ObjectId[];
    workspaces?: Types.ObjectId[];
}
