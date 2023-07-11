import { Types } from 'mongoose';
import { IBase } from './base.interface';
import { IMeta } from './shared.interface';
export interface IAction extends IBase {
    id: string;
    order: Types.ObjectId;
    status: string;
    action: string;
    meta: IMeta;
}
