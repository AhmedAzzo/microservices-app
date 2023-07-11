import { Types } from "mongoose";
import { IBase } from "./base.interface";
import { IMeta } from "./shared.interface";
export interface IProduct extends IBase {
    id: string;
    name: string;
    description: string;
    code: string;
    qty: number;
    price: number;
    currency: string;
    subCategory: Types.ObjectId;
    images: string[];
    meta: IMeta;
}
