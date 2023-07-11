import { Types } from 'mongoose';
export declare class CreateProductDto {
    name: string;
    description: string;
    code: string;
    price: number;
    qty: number;
    currency: string;
    subCategory: Types.ObjectId;
    images: string[];
    meta: any;
}
