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
import { Logger } from '@nestjs/common';
import { Connection, FilterQuery, Model, UpdateQuery } from 'mongoose';
import { AbstractDocument } from './abstract.schema';
import { CreateIndexesOptions } from 'mongodb';
import { IBaseQueryParams, IFindOptions } from '../interfaces';
export declare abstract class AbstractRepository<TDocument extends AbstractDocument> {
    protected readonly model: Model<TDocument>;
    private readonly connection;
    session: any;
    protected abstract readonly logger: Logger;
    constructor(model: Model<TDocument>, connection: Connection);
    create(document: Omit<TDocument, '_id'>): Promise<TDocument>;
    findOne(filterQuery: FilterQuery<TDocument>, options?: IFindOptions): Promise<TDocument>;
    findOneWithPopulate(filterQuery: FilterQuery<TDocument>, options?: IFindOptions): Promise<any>;
    findOneAndUpdate(filterQuery: FilterQuery<TDocument>, update: UpdateQuery<TDocument>): Promise<import("mongoose").IfAny<TDocument, any, import("mongoose").Document<unknown, {}, TDocument> & Omit<import("mongoose").Require_id<TDocument>, never>>>;
    find(filterQuery: FilterQuery<TDocument>, options?: IFindOptions): Promise<TDocument[]>;
    findWithPopulate(filterQuery: FilterQuery<TDocument>, options?: IFindOptions): Promise<TDocument[]>;
    findOneAndDelete(filterQuery: FilterQuery<TDocument>): Promise<import("mongoose").IfAny<TDocument, any, import("mongoose").Document<unknown, {}, TDocument> & Omit<import("mongoose").Require_id<TDocument>, never>>>;
    createIndex(options: CreateIndexesOptions): Promise<void>;
    updateMany(filterQuery: FilterQuery<TDocument>, update: UpdateQuery<TDocument>): Promise<import("mongoose").UpdateWriteOpResult>;
    update(filterQuery: FilterQuery<TDocument>, update: UpdateQuery<TDocument>): Promise<import("mongoose").IfAny<TDocument, any, import("mongoose").Document<unknown, {}, TDocument> & Omit<import("mongoose").Require_id<TDocument>, never>>>;
    aggregate(filterQuery: FilterQuery<TDocument>, options?: IBaseQueryParams): Promise<{}>;
    aggregateWithCustomAggregateQuery(query: any[]): Promise<TDocument[]>;
    startAndGetSession(): Promise<any>;
}
