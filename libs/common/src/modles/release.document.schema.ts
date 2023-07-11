import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument, IReleaseDocument } from '@app/common';
import { Meta } from './shared.schema';
import mongoose, { Types } from 'mongoose';

@Schema({ versionKey: false, timestamps: true })
export class Release extends AbstractDocument implements IReleaseDocument {
  @Prop({
    type: String,
    unique: true,
    required: true,
  })
  id: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'order',
    required: true,
  })
  order: Types.ObjectId;

  // exist in coc order
  // @Prop({
  //   type: Date,
  //   required: true,
  // })
  // cocOfDateExpire: Date;
  @Prop({
    type: String,
    required: true,
  })
  nameImporter: string;
  @Prop({
    type: String,
    required: true,
  })
  entryPoint: string;
  @Prop({
    type: String,
    required: false,
  })
  detailsPackagesContainers: string;
  @Prop({
    type: String,
    required: false,
  })
  importDocumentsNotMentionedCertificate: string;
  @Prop({
    type: String,
    required: false,
  })
  numberOfLineItems: string;
  @Prop({
    type: String,
    enum: ['Packages', 'Trucks', 'Partial Container', 'FullContainer'],
    required: true,
  })
  shipmentType: string;
  @Prop({
    type: String,
    required: true,
  })
  shipmentDetails: string;
  @Prop({
    type: Number,
    required: true,
  })
  totalQuantity: number;
  @Prop({
    type: Number,
    required: true,
  })
  incomingQuantity: number;
  @Prop({
    type: Number,
    required: true,
  })
  leftoverQuantity: number;

  @Prop({
    type: String,
    required: false,
  })
  comments: string;
  @Prop({
    type: String,
    required: false,
  })
  companyUsualDisclaimer: string;
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({ type: Meta })
  meta: Meta;
}

export const ReleaseSchema = SchemaFactory.createForClass(Release);
