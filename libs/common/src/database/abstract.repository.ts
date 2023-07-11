import { Logger, NotFoundException } from '@nestjs/common';
import { Connection, FilterQuery, Model, Types, UpdateQuery } from 'mongoose';
import { AbstractDocument } from './abstract.schema';
import { CreateIndexesOptions } from 'mongodb';
import { IBaseQueryParams, IFindOptions } from '../interfaces';


export abstract class AbstractRepository<TDocument extends AbstractDocument> {
  session
  protected abstract readonly logger: Logger;

  constructor(protected readonly model: Model<TDocument>, private readonly connection: Connection) { }

  async create(document: Omit<TDocument, '_id'>): Promise<TDocument> {
    const createdDocument = new this.model({
      ...document,
      _id: new Types.ObjectId(),
    });
    return (await createdDocument.save()).toJSON() as unknown as TDocument;
  }

  async findOne(filterQuery: FilterQuery<TDocument>, options?: IFindOptions): Promise<TDocument> {
    const document = await this.model.findOne(filterQuery, options?.select, { lean: true });
    if (!document) {
      this.logger.warn('Document not found with filterQuery', filterQuery);
      throw new NotFoundException('Document not found.');
    }
    return document;
  }
  async findOneWithPopulate(filterQuery: FilterQuery<TDocument>, options?: IFindOptions): Promise<any> {
    const document = await this.model.findOne(filterQuery, options?.select, { lean: true }).populate({ path: options?.populate?.path, select: options?.populate?.select }).exec();
    if (!document) {
      this.logger.warn('Document not found with filterQuery', filterQuery);
      throw new NotFoundException('Document not found.');
    }
    return document;
  }

  async findOneAndUpdate(
    filterQuery: FilterQuery<TDocument>,
    update: UpdateQuery<TDocument>,
  ) {
    const document = await this.model.findOneAndUpdate(filterQuery, update, {
      select: { id: 1, moduleSettings: 1 },
      lean: true,
      new: true,
    });

    if (!document) {
      this.logger.warn('Document not found with filterQuery', filterQuery);
      throw new NotFoundException('Document not found.');
    }
    return document;
  }

  async find(filterQuery: FilterQuery<TDocument>, options?: IFindOptions): Promise<TDocument[]> {
    const sort = options?.sort || '-createdAt';
    const limit: number = +options?.limit || 25;
    const skip: number = +options?.skip || (+options?.page || 0) * limit;
    const targetDocuments = await this.model.find(
      filterQuery,
      { ...options?.select },
      { lean: true }
    )
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .exec();
    return targetDocuments
  }

  async findWithPopulate(filterQuery: FilterQuery<TDocument>, options?: IFindOptions): Promise<TDocument[]> {
    const sort = options?.sort || '-createdAt';
    const limit: number = +options?.limit || 25;
    const skip: number = +options?.skip || (+options?.page || 0) * limit;
    const targetDocuments = await this.model.find(
      filterQuery,
      { ...options.select },
      { lean: true }
    )
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .populate({ path: options?.populate?.path, select: options?.populate?.select })
      .exec();
    return targetDocuments
  }

  async findOneAndDelete(filterQuery: FilterQuery<TDocument>) {
    return this.model.findOneAndDelete(filterQuery, { lean: true });
  }

  async createIndex(options: CreateIndexesOptions) {
    return this.model.createIndexes(options as any);
  }

  async updateMany(
    filterQuery: FilterQuery<TDocument>,
    update: UpdateQuery<TDocument>,
  ) {
    const documents = await this.model.updateMany(filterQuery, update, {
      lean: true,
      new: true,
    });

    if (!documents) {
      this.logger.warn('Documents not found with filterQuery', filterQuery);
      throw new NotFoundException('Documents not found.');
    }
    return documents;
  }
  async update(
    filterQuery: FilterQuery<TDocument>,
    update: UpdateQuery<TDocument>,
  ) {

    const document = await this.model.findOneAndUpdate(filterQuery, update, {
      lean: true,
      new: true,
    });

    if (!document) {
      this.logger.warn('Document not found with filterQuery', filterQuery);
      throw new NotFoundException('Document not found.');
    }
    return document;
  }

  async aggregate(filterQuery: FilterQuery<TDocument>, options?: IBaseQueryParams): Promise<{}> {
    const sort = options?.sort || '-createdAt';
    const limit: number = +options?.limit || 25;
    const skip: number = +options?.skip || (+options?.page || 0) * limit;

    const paginatedResults = [
      {
        $project: {
          ...options.project
        },
      },
      { $sort: sort },
      { $skip: skip * limit },
      { $limit: limit },
    ];
    if (options?.otherQueryOptions) {
      paginatedResults.splice(1, 0, ...options?.otherQueryOptions);
    }
    const targetDocuments = await this.model.aggregate([
      { $match: filterQuery },
      {
        $facet: {
          paginatedResults: paginatedResults,
          totalCount: [
            {
              $count: 'count',
            },
          ],
        },
      },
    ])
    return targetDocuments
  }


  async aggregateWithCustomAggregateQuery(query: any[]): Promise<TDocument[]> {
    const targetDocuments = await this.model.aggregate(query)
    return targetDocuments
  }

  async startAndGetSession(): Promise<any> {
    if (this.session) throw new Error('session already started for this helper');
    this.session = await this.connection.startSession();
    this.session.startTransaction();
    return this.session;
  }


}
