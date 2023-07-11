import { AbstractDocument, ISubCategory } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { Meta } from './shared.schema';

@Schema({ versionKey: false, timestamps: true })
export class SubCategory extends AbstractDocument implements ISubCategory {

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
  })
  image: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
    required: true,
  })
  category: Types.ObjectId;

  @Prop({ type: Meta })
  meta: Meta;
}

export const SubCategorySchema = SchemaFactory.createForClass(SubCategory);
