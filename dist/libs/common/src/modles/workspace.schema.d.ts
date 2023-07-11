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
import { AbstractDocument, IWorkspace, WorkspaceStatus } from '@app/common';
import { Location, Meta } from './shared.schema';
import { Types } from 'mongoose';
export declare class Workspace extends AbstractDocument implements IWorkspace {
    id: string;
    name: string;
    description: string;
    users: Types.ObjectId[];
    status: WorkspaceStatus;
    location: Location;
    meta: Meta;
}
export declare const WorkspaceSchema: import("mongoose").Schema<Workspace, import("mongoose").Model<Workspace, any, any, any, import("mongoose").Document<unknown, any, Workspace> & Omit<Workspace & Required<{
    _id: Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Workspace, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Workspace>> & Omit<import("mongoose").FlatRecord<Workspace> & Required<{
    _id: Types.ObjectId;
}>, never>>;
