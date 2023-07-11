import { IBase } from "./base.interface";
import { IMeta } from "./shared.interface";
export interface IWorkflow extends IBase {
    id: string;
    meta: IMeta;
}
