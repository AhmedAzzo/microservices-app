import { IBase } from "./base.interface";
import { IMeta } from "./shared.interface";
export interface INoneReleaseDocument extends IBase {
    id: string;
    meta: IMeta;
}
