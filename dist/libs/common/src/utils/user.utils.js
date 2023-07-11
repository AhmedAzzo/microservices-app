"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersFromAuthMicroservice = exports._test = void 0;
const rxjs_1 = require("rxjs");
const lodash_1 = require("lodash");
const _test = () => {
    return 'test';
};
exports._test = _test;
const getUsersFromAuthMicroservice = async (authClient, user, users_ids) => {
    try {
        let data = authClient.send('users', { "code": user.meta.orgInfo.code, _ids: users_ids }).pipe((0, rxjs_1.take)(100));
        let users = await (0, rxjs_1.lastValueFrom)(data);
        const usersMap = (0, lodash_1.keyBy)(users, '_id');
        return usersMap;
    }
    catch (error) {
        throw error;
    }
};
exports.getUsersFromAuthMicroservice = getUsersFromAuthMicroservice;
//# sourceMappingURL=user.utils.js.map