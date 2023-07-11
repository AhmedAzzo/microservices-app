import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument, IUser, UserStatus } from '@app/common';
import { Types } from 'mongoose';
import { Meta } from './shared.schema';

@Schema({ versionKey: false, timestamps: true })
export class User extends AbstractDocument implements IUser {

  @Prop({
    type: String,
    unique: true,
    required: true,
  })
  id: string;

  @Prop({
    type: String,
    default: "ACTIVE",
  })
  status: UserStatus;


  @Prop({
    type: Boolean,
    default: false,
  })
  blocked: boolean;
  @Prop({
    type: String,
  })
  firstName: string;

  @Prop({
    type: String,
  })
  lastName: string;

  @Prop({
    type: String,
  })
  email: string;

  @Prop({
    type: String,
  })
  image: string;

  @Prop({
    type: String,
  })
  password: string;

  @Prop({
    type: String,
  })
  position: string;

  @Prop({
    type: String,
  })
  phoneNumber: string;

  @Prop({
    type: String,
  })
  token: string;

  @Prop({
    type: String,
  })
  securityCode: string;

  @Prop({
    type: Number,
    default: 0,
  })
  remainingResetAttempts: number;

  @Prop({
    type: Number,
    default: 0,
  })
  passwordChangedEpoch: number;

  @Prop({
    type: Boolean,
    default: false,
  })
  isPrimary: boolean;

  @Prop([{ type: Types.ObjectId, ref: 'roles' }])
  roles: Types.ObjectId[];

  @Prop([{ type: Types.ObjectId, ref: 'workspaces' }])
  workspaces: Types.ObjectId[];

  @Prop({
    type: Date,
  })
  lastLoggedIn: Date;

  @Prop({ type: Meta })
  meta: Meta;
}

export const UserSchema = SchemaFactory.createForClass(User);
