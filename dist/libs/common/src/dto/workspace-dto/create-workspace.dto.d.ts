import { Meta } from '@app/common/modles/shared.schema';
import { Types } from 'mongoose';
export declare class AddressDto {
    addressType: string;
    city: string;
    street: string;
    provinceState: string;
    country: string;
    postalCode: string;
    latitude: string;
    longitude: string;
}
export declare class LocationDto {
    name: string;
    description: string;
    address: AddressDto;
}
export declare class CreateWorkspaceDto {
    id?: string;
    name: string;
    description: string;
    users: Types.ObjectId[];
    location: LocationDto;
    meta: Meta;
}
