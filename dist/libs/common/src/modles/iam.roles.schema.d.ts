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
import { AbstractDocument } from '@app/common';
import { Types } from 'mongoose';
import { Meta } from './shared.schema';
export declare class IamRole extends AbstractDocument {
    id: string;
    code: string;
    groupName: string;
    displayName: string;
    description: string;
    iamPolices: Types.ObjectId[];
    meta: Meta;
}
export declare const IamRoleSchema: import("mongoose").Schema<IamRole, import("mongoose").Model<IamRole, any, any, any, import("mongoose").Document<unknown, any, IamRole> & Omit<IamRole & Required<{
    _id: Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IamRole, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IamRole>> & Omit<import("mongoose").FlatRecord<IamRole> & Required<{
    _id: Types.ObjectId;
}>, never>>;
