import { Types } from "mongoose";
import { IBase } from "./base.interface";
import { IMeta } from "./shared.interface";

export interface ISubCategory extends IBase {
    id: string;
    name: string;
    description: string;
    category: Types.ObjectId;
    image: string
    meta: IMeta;
}
