import { IBase } from "./base.interface";
import { IMeta } from "./shared.interface";
export interface IIamRole extends IBase {
    id: string;
    code: string;
    groupName: string;
    displayName: string;
    description: string;
    iamPolices: string[];
    meta: IMeta;
}
