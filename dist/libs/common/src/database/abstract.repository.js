"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
class AbstractRepository {
    constructor(model, connection) {
        this.model = model;
        this.connection = connection;
    }
    async create(document) {
        const createdDocument = new this.model(Object.assign(Object.assign({}, document), { _id: new mongoose_1.Types.ObjectId() }));
        return (await createdDocument.save()).toJSON();
    }
    async findOne(filterQuery, options) {
        const document = await this.model.findOne(filterQuery, options === null || options === void 0 ? void 0 : options.select, { lean: true });
        if (!document) {
            this.logger.warn('Document not found with filterQuery', filterQuery);
            throw new common_1.NotFoundException('Document not found.');
        }
        return document;
    }
    async findOneWithPopulate(filterQuery, options) {
        var _a, _b;
        const document = await this.model.findOne(filterQuery, options === null || options === void 0 ? void 0 : options.select, { lean: true }).populate({ path: (_a = options === null || options === void 0 ? void 0 : options.populate) === null || _a === void 0 ? void 0 : _a.path, select: (_b = options === null || options === void 0 ? void 0 : options.populate) === null || _b === void 0 ? void 0 : _b.select }).exec();
        if (!document) {
            this.logger.warn('Document not found with filterQuery', filterQuery);
            throw new common_1.NotFoundException('Document not found.');
        }
        return document;
    }
    async findOneAndUpdate(filterQuery, update) {
        const document = await this.model.findOneAndUpdate(filterQuery, update, {
            select: { id: 1, moduleSettings: 1 },
            lean: true,
            new: true,
        });
        if (!document) {
            this.logger.warn('Document not found with filterQuery', filterQuery);
            throw new common_1.NotFoundException('Document not found.');
        }
        return document;
    }
    async find(filterQuery, options) {
        const sort = (options === null || options === void 0 ? void 0 : options.sort) || '-createdAt';
        const limit = +(options === null || options === void 0 ? void 0 : options.limit) || 25;
        const skip = +(options === null || options === void 0 ? void 0 : options.skip) || (+(options === null || options === void 0 ? void 0 : options.page) || 0) * limit;
        const targetDocuments = await this.model.find(filterQuery, Object.assign({}, options === null || options === void 0 ? void 0 : options.select), { lean: true })
            .sort(sort)
            .skip(skip)
            .limit(limit)
            .exec();
        return targetDocuments;
    }
    async findWithPopulate(filterQuery, options) {
        var _a, _b;
        const sort = (options === null || options === void 0 ? void 0 : options.sort) || '-createdAt';
        const limit = +(options === null || options === void 0 ? void 0 : options.limit) || 25;
        const skip = +(options === null || options === void 0 ? void 0 : options.skip) || (+(options === null || options === void 0 ? void 0 : options.page) || 0) * limit;
        const targetDocuments = await this.model.find(filterQuery, Object.assign({}, options.select), { lean: true })
            .sort(sort)
            .skip(skip)
            .limit(limit)
            .populate({ path: (_a = options === null || options === void 0 ? void 0 : options.populate) === null || _a === void 0 ? void 0 : _a.path, select: (_b = options === null || options === void 0 ? void 0 : options.populate) === null || _b === void 0 ? void 0 : _b.select })
            .exec();
        return targetDocuments;
    }
    async findOneAndDelete(filterQuery) {
        return this.model.findOneAndDelete(filterQuery, { lean: true });
    }
    async createIndex(options) {
        return this.model.createIndexes(options);
    }
    async updateMany(filterQuery, update) {
        const documents = await this.model.updateMany(filterQuery, update, {
            lean: true,
            new: true,
        });
        if (!documents) {
            this.logger.warn('Documents not found with filterQuery', filterQuery);
            throw new common_1.NotFoundException('Documents not found.');
        }
        return documents;
    }
    async update(filterQuery, update) {
        const document = await this.model.findOneAndUpdate(filterQuery, update, {
            lean: true,
            new: true,
        });
        if (!document) {
            this.logger.warn('Document not found with filterQuery', filterQuery);
            throw new common_1.NotFoundException('Document not found.');
        }
        return document;
    }
    async aggregate(filterQuery, options) {
        const sort = (options === null || options === void 0 ? void 0 : options.sort) || '-createdAt';
        const limit = +(options === null || options === void 0 ? void 0 : options.limit) || 25;
        const skip = +(options === null || options === void 0 ? void 0 : options.skip) || (+(options === null || options === void 0 ? void 0 : options.page) || 0) * limit;
        const paginatedResults = [
            {
                $project: Object.assign({}, options.project),
            },
            { $sort: sort },
            { $skip: skip * limit },
            { $limit: limit },
        ];
        if (options === null || options === void 0 ? void 0 : options.otherQueryOptions) {
            paginatedResults.splice(1, 0, ...options === null || options === void 0 ? void 0 : options.otherQueryOptions);
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
        ]);
        return targetDocuments;
    }
    async aggregateWithCustomAggregateQuery(query) {
        const targetDocuments = await this.model.aggregate(query);
        return targetDocuments;
    }
    async startAndGetSession() {
        if (this.session)
            throw new Error('session already started for this helper');
        this.session = await this.connection.startSession();
        this.session.startTransaction();
        return this.session;
    }
}
exports.AbstractRepository = AbstractRepository;
//# sourceMappingURL=abstract.repository.js.map