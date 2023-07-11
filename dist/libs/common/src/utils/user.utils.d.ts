import { ClientProxy } from "@nestjs/microservices";
import { IUser } from "../interfaces";
import { Dictionary } from 'lodash';
export declare const _test: () => string;
export declare const getUsersFromAuthMicroservice: (authClient: ClientProxy, user: IUser, users_ids: any) => Promise<Dictionary<{
    _id: string;
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
    position: string;
}>>;
