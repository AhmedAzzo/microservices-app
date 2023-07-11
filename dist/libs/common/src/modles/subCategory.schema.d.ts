import { AbstractDocument, ISubCategory } from '@app/common';
import mongoose, { Types } from 'mongoose';
import { Meta } from './shared.schema';
export declare class SubCategory extends AbstractDocument implements ISubCategory {
    id: string;
    name: string;
    description: string;
    image: string;
    category: Types.ObjectId;
    meta: Meta;
}
export declare const SubCategorySchema: mongoose.Schema<SubCategory, mongoose.Model<SubCategory, any, any, any, mongoose.Document<unknown, any, SubCategory> & Omit<SubCategory & Required<{
    _id: Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, SubCategory, mongoose.Document<unknown, {}, mongoose.FlatRecord<SubCategory>> & Omit<mongoose.FlatRecord<SubCategory> & Required<{
    _id: Types.ObjectId;
}>, never>>;
