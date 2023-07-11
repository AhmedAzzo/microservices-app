import { IBase } from "./base.interface";
import { IMeta } from "./shared.interface";
export interface IReleaseDocument extends IBase {
    id: string;
    meta: IMeta;
}
