import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument, ICategory } from '@app/common';
import { Meta } from './shared.schema';


@Schema({ versionKey: false, timestamps: true })
export class Category extends AbstractDocument implements ICategory {

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
    required: false,
  })
  image: string;

  @Prop({
    type: String,
    required: false,
  })
  description: string;


  @Prop({ type: Meta })
  meta: Meta;

}

export const CategorySchema = SchemaFactory.createForClass(Category);
