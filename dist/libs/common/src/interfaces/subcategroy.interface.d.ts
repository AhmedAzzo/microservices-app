import { Category } from "../modles";
import { IBase } from "./base.interface";
import { IMeta } from "./shared.interface";
export interface ISubCategory extends IBase {
    id: string;
    name: string;
    description: string;
    category: Category;
    image: string;
    meta: IMeta;
}
