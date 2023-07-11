import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Meta } from './shared.schema';

@Schema()
export class Products {
  @Prop({ type: Number, required: true })
  qty: number;

  @Prop({ type: String, required: true })
  goodsValue: string;

  @Prop({ type: String, required: true })
  originAsMarkedOnGoods: string;

  @Prop({ type: String, required: false })
  description: string;

  @Prop({ type: String, required: false })
  iQStandardNo: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
    required: true,
  })
  product: string;
}

const ProductsSchema = SchemaFactory.createForClass(Products);

@Schema({ versionKey: false, timestamps: true })
export class Order extends AbstractDocument {

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
  cocNo: string;
  @Prop({
    type: String,
    required: true,
  })
  registrationNo: string;
  @Prop({
    type: String,
    required: true,
  })
  referenceNo: string;
  @Prop({
    type: Date,
    required: true,
  })
  issuanceDate: Date;
  @Prop({
    type: Date,
    required: true,
  })
  expDateOfCoc: Date;
  @Prop({
    type: String,
    required: true,
  })
  importer: string;
  @Prop({
    type: String,
    required: true,
  })
  importerAddress: string;
  @Prop({
    type: String,
    required: true,
  })
  importerCountry: string;
  @Prop({
    type: String,
    required: true,
  })
  importerCity: string;
  @Prop({
    type: String,
    required: true,
  })
  exporter: string;
  @Prop({
    type: String,
    required: true,
  })
  exporterAddress: string;
  @Prop({
    type: String,
    required: true,
  })
  exporterCountry: string;
  @Prop({
    type: String,
    required: true,
  })
  exporterCity: string;
  @Prop({
    type: Number,
    required: true,
  })
  invoiceAmount: number;
  @Prop({
    type: String,
    required: true,
  })
  invoiceCurrency: string;
  @Prop({
    type: String,
    required: true,
  })
  invoiceNo: string;
  @Prop({
    type: Date,
    required: true,
  })
  invoiceDate: Date;
  @Prop({
    type: String,
    required: true,
  })
  methodOfShipment: string;
  @Prop({
    type: String,
    required: true,
  })
  countryOfShipment: string;
  @Prop({
    type: Number,
    required: true,
  })
  documentNumber: number;
  @Prop({
    type: Date,
    required: true,
  })
  documentDate: Date;
  @Prop({
    type: String,
    required: true,
  })
  declaredPointOfEntry: string;
  @Prop({
    type: String,
    required: true,
  })
  packingDetails: string;
  @Prop({
    type: Number,
    required: true,
  })
  numberAndTypeOfPackages: number;
  @Prop({
    type: String,
    required: true,
  })
  containersOrTruckDetails: string;
  @Prop({
    type: Number,
    required: true,
  })
  containersOrTruckAndSealNumbers: number;

  @Prop({
    type: [ProductsSchema],
  })
  products: Products[];

  @Prop({
    type: String,
    required: true,
  })
  remarks: string;
  @Prop({
    type: Date,
    required: true,
  })
  dateOfAssessment: Date;
  @Prop({
    type: Number,
    required: true,
  })
  invoiceValueInUsd: number;
  @Prop({
    type: Number,
    required: true,
  })
  declaredValuePerContainer: number;
  @Prop({
    type: String,
    required: true,
  })
  nameAndSignature: string;
  @Prop({
    type: String,
    required: true,
  })
  officeIssuing: string;

  // TODO: add images
  @Prop({
    type: String,
    required: true,
  })
  logo: string;
  @Prop({
    type: String,
    required: true,
    enum: ['draft', 'partial-approved', 'approved', 'rejected'],
  })
  status: string;

  @Prop({ type: Meta })
  meta: Meta;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
