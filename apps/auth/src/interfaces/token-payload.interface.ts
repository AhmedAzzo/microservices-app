
import { IOrgInfo } from "@app/common";
import { Types } from "mongoose";

export interface TokenPayload {
  _id: string,
  id: string,
  status: string,
  firstName: string,
  lastName: string,
  email: string,
  image: string,
  position: string,
  phoneNumber: string,
  roles: Types.ObjectId[],
  orgInfo: IOrgInfo;
  workspaces: Types.ObjectId[];
}
