"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMeta = exports.getFilterQuery = exports.getPaginationForAggregaateQueryHelper = exports.getPaginationQuery = void 0;
const getPaginationQuery = (queryParams, keyMapper = {}) => {
    let sort = queryParams.sort;
    if (sort && keyMapper[sort]) {
        const sortField = keyMapper[sort];
        Array.isArray(sortField)
            ? (sort = sortField.map((x) => [x]))
            : (sort = sortField);
    }
    else if (sort && keyMapper[sort.substring(1)]) {
        const sortField = keyMapper[sort.substring(1)];
        Array.isArray(sortField)
            ? (sort = sortField.map((x) => [`-${x}`]))
            : (sort = `-${sortField}`);
    }
    else {
        sort = { createdAt: -1 };
    }
    return {
        sort: sort,
        limit: +queryParams.limit || 10,
        page: +queryParams.page || 0,
        skip: +queryParams.skip || 0,
    };
};
exports.getPaginationQuery = getPaginationQuery;
const getPaginationForAggregaateQueryHelper = (queryParams, keyMapper = {}) => {
    let sort = queryParams.sort;
    if (sort && keyMapper[sort]) {
        sort = { [keyMapper[sort]]: 1 };
    }
    else if (sort && keyMapper[sort.substring(1)]) {
        sort = { [keyMapper[sort.substring(1)]]: -1 };
    }
    return {
        sort: sort,
        limit: +queryParams.limit || 10,
        page: +queryParams.page || 0,
        skip: +queryParams.skip,
    };
};
exports.getPaginationForAggregaateQueryHelper = getPaginationForAggregaateQueryHelper;
const getQuery = (filter, keyValueParser) => {
    if (filter.type === 'equals') {
        return keyValueParser(filter.filter);
    }
    else if (filter.type === 'or') {
        return { $in: filter.filter.split(',') };
    }
    else if (filter.type === 'contains') {
        return new RegExp(keyValueParser(filter.filter), 'i');
    }
    else if (filter.type === 'lessThanOrEqual') {
        return { $lte: keyValueParser(filter.filter) };
    }
    else if (filter.type === 'greaterThanOrEqual') {
        return { $gte: keyValueParser(filter.filter) };
    }
    else if (filter.type === 'inRange') {
        return {
            $gte: keyValueParser(filter.filter),
            $lte: keyValueParser(filter.filterTo),
        };
    }
    else if (typeof filter !== 'object') {
        return keyValueParser(filter);
    }
    else if (Array.isArray(filter)) {
        return { $in: filter.map(keyValueParser) };
    }
    else if (filter.filterType === 'set') {
        return { $in: filter.values };
    }
};
const getFilterQuery = (filter, keyMapper = {}, valueParser = {}) => {
    if (!filter)
        return {};
    let query = {};
    Object.keys(filter).forEach((key) => {
        const queryKey = keyMapper[key] || key;
        const keyValueParser = valueParser[key] || ((val) => val);
        if (Array.isArray(queryKey)) {
            const _query = getQuery(filter[key], keyValueParser);
            query.$or = query.$or || [];
            queryKey.forEach((k) => {
                query.$or.push({ [k]: _query });
            });
        }
        else {
            if (filter[key].filterType === 'date') {
                if (filter[key].type === 'greaterThanOrEqual') {
                    query = Object.assign(Object.assign({}, query), { $and: [
                            {
                                $expr: {
                                    $gte: [`$${queryKey}`, { $toDate: filter[key].dateFrom }],
                                },
                            },
                        ] });
                }
                else if (filter[key].type === 'lessThanOrEqual') {
                    query = Object.assign(Object.assign({}, query), { $and: [
                            {
                                $expr: {
                                    $lte: [`$${queryKey}`, { $toDate: filter[key].dateFrom }],
                                },
                            },
                        ] });
                }
                else if (filter[key].type === 'inRange') {
                    query = Object.assign(Object.assign({}, query), { $and: [
                            {
                                $expr: {
                                    $and: [
                                        {
                                            $gte: [`$${queryKey}`, { $toDate: filter[key].dateFrom }],
                                        },
                                        {
                                            $lte: [`$${queryKey}`, { $toDate: filter[key].dateTo }],
                                        },
                                    ],
                                },
                            },
                        ] });
                }
            }
            if (filter[key].filterType !== 'date') {
                query[queryKey] = getQuery(filter[key], keyValueParser);
            }
        }
    });
    return query;
};
exports.getFilterQuery = getFilterQuery;
const getMeta = (meta, userId) => {
    meta = Object.assign(Object.assign({}, meta), { createdBy: { orgId: meta.orgInfo.id, performerId: userId }, updatedBy: { orgId: meta.orgInfo.id, performerId: userId }, updatedDate: new Date(), createdDate: new Date() });
    return meta;
};
exports.getMeta = getMeta;
//# sourceMappingURL=api.utils.js.map