/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { AbstractDocument, IUser, UserStatus } from '@app/common';
import { Types } from 'mongoose';
import { Meta } from './shared.schema';
export declare class User extends AbstractDocument implements IUser {
    id: string;
    status: UserStatus;
    blocked: boolean;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
    password: string;
    position: string;
    phoneNumber: string;
    token: string;
    securityCode: string;
    remainingResetAttempts: number;
    passwordChangedEpoch: number;
    isPrimary: boolean;
    roles: Types.ObjectId[];
    workspaces: Types.ObjectId[];
    lastLoggedIn: Date;
    meta: Meta;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, import("mongoose").Document<unknown, any, User> & Omit<User & Required<{
    _id: Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User>> & Omit<import("mongoose").FlatRecord<User> & Required<{
    _id: Types.ObjectId;
}>, never>>;
