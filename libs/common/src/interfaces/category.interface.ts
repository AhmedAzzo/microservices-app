import { Types } from "mongoose";
import { IBase } from "./base.interface";
import { IMeta } from "./shared.interface";

export interface ICategory extends IBase {
    id: string;
    name: string;
    description: string;
    image: string;
    meta: IMeta;
}
