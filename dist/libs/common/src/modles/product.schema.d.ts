import { AbstractDocument, IProduct } from '@app/common';
import mongoose, { Types } from 'mongoose';
import { Meta } from './shared.schema';
export declare class Product extends AbstractDocument implements IProduct {
    id: string;
    name: string;
    description: string;
    code: string;
    qty: number;
    price: number;
    currency: string;
    subCategory: Types.ObjectId;
    images: string[];
    meta: Meta;
}
export declare const ProductSchema: mongoose.Schema<Product, mongoose.Model<Product, any, any, any, mongoose.Document<unknown, any, Product> & Omit<Product & Required<{
    _id: Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Product, mongoose.Document<unknown, {}, mongoose.FlatRecord<Product>> & Omit<mongoose.FlatRecord<Product> & Required<{
    _id: Types.ObjectId;
}>, never>>;
