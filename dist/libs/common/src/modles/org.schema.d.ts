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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { AbstractDocument, IOrg, OrgStatus, OrgType } from '@app/common';
import { Contact, Location, Meta, ModuleSettings } from './shared.schema';
export declare class Org extends AbstractDocument implements IOrg {
    id: string;
    name: string;
    orgDisplayName: string;
    orgLogo: string;
    code: string;
    status: OrgStatus;
    location: Location;
    contact: Contact;
    orgType: OrgType;
    moduleSettings: ModuleSettings;
    meta: Meta;
}
export declare const OrgSchema: import("mongoose").Schema<Org, import("mongoose").Model<Org, any, any, any, import("mongoose").Document<unknown, any, Org> & Omit<Org & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Org, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Org>> & Omit<import("mongoose").FlatRecord<Org> & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, never>>;
