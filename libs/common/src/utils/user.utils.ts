import { ClientProxy } from "@nestjs/microservices";
import { lastValueFrom, take } from "rxjs";
import { IUser } from "../interfaces";
import { User } from "../modles";
import { keyBy, Dictionary } from 'lodash';

export const _test = () => {
    return 'test'
};

/**
 * 
 * @param authClient ClientProxy, connection object to auth microservice
 * @param user user to get the ORG
 * @param users_ids array of users ids
 * @returns 
 */
export const getUsersFromAuthMicroservice = async (authClient: ClientProxy, user: IUser, users_ids): Promise<Dictionary<{
    _id: string,
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    image: string,
    position: string
}>> => {
    try {
        let data = authClient.send<User[]>('users', { "code": user.meta.orgInfo.code, _ids: users_ids }).pipe(take(100))
        let users = await lastValueFrom(data);
        const usersMap = keyBy(users, '_id');
        return usersMap;
    } catch (error) {
        throw error
    }
};


