import { Types } from "mongoose";
import { WorkspaceStatus } from "../enums";
import { IBase } from "./base.interface";
import { ILocation, IMeta } from "./shared.interface";

export interface IWorkspace extends IBase {
    id: string;
    name: string;
    description: string;
    users: Types.ObjectId[];
    status: WorkspaceStatus;
    location: ILocation;
    meta: IMeta;
}
