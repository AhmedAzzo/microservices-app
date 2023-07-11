import { AbstractDocument, IAction } from '@app/common';
import { Meta } from './shared.schema';
import mongoose, { Types } from 'mongoose';
export declare class Action extends AbstractDocument implements IAction {
    id: string;
    order: Types.ObjectId;
    status: string;
    action: string;
    meta: Meta;
}
export declare const ActionSchema: mongoose.Schema<Action, mongoose.Model<Action, any, any, any, mongoose.Document<unknown, any, Action> & Omit<Action & Required<{
    _id: Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Action, mongoose.Document<unknown, {}, mongoose.FlatRecord<Action>> & Omit<mongoose.FlatRecord<Action> & Required<{
    _id: Types.ObjectId;
}>, never>>;
