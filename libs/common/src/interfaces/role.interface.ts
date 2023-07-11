import { Types } from "mongoose";
import { IBase } from "./base.interface";
import { IMeta } from "./shared.interface";

export interface IRole extends IBase {
    id: string;
    name: string;
    status: string;
    code: string;
    description: string;
    displayName: string;
    iampolicies: Types.ObjectId[];
}
