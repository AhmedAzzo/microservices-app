import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument, IAction } from '@app/common';
import { Meta } from './shared.schema';
import mongoose, { Types } from 'mongoose';

@Schema({ versionKey: false, timestamps: true })
export class Action extends AbstractDocument implements IAction {
  @Prop({
    type: String,
    unique: true,
    required: true,
  })
  id: string;

  @Prop({
    type: Types.ObjectId,
    ref: 'order',
    required: true,
  })
  order: Types.ObjectId;
  @Prop({
    type: String,
    required: true,
  })
  status: string;
  @Prop({
    type: String,
    required: true,
  })
  action: string; // create update

  @Prop({ type: Meta })
  meta: Meta;
}

export const ActionSchema = SchemaFactory.createForClass(Action);
