import { AbstractDocument, IProduct } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { Meta } from './shared.schema';

@Schema({ versionKey: false, timestamps: true })
export class Product extends AbstractDocument implements IProduct {
  @Prop({
    type: String,
    unique: true,
    required: true,
  })
  id: string;

  @Prop({
    type: String,
    required: true,
  })
  name: string;
  @Prop({
    type: String,
  })
  description: string;
  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  code: string;
  @Prop({
    type: Number,
    required: true,
  })
  qty: number;
  @Prop({
    type: Number,
    required: true,
  })
  price: number;
  @Prop({
    type: String,
    required: true,
  })
  currency: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'subcategory',
    required: true,
  })
  subCategory: Types.ObjectId;

  @Prop({
    type: [String],
    required: true,
  })
  images: string[];

  @Prop({ type: Meta })
  meta: Meta;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
