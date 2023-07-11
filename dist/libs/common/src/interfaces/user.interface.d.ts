import { Types } from "mongoose";
import { UserStatus } from "../enums";
import { IBase } from "./base.interface";
import { IMeta } from "./shared.interface";
export interface IUser extends IBase {
    id: string;
    status: UserStatus;
    blocked: boolean;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
    password: string;
    position: string;
    phoneNumber: string;
    token: string;
    securityCode: string;
    remainingResetAttempts: number;
    passwordChangedEpoch: number;
    isPrimary: boolean;
    roles: Types.ObjectId[];
    workspaces: Types.ObjectId[];
    lastLoggedIn: Date;
    meta: IMeta;
}
