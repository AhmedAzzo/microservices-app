import { AbstractDocument, IReleaseDocument } from '@app/common';
import { Meta } from './shared.schema';
import mongoose, { Types } from 'mongoose';
export declare class Release extends AbstractDocument implements IReleaseDocument {
    id: string;
    order: Types.ObjectId;
    nameImporter: string;
    entryPoint: string;
    detailsPackagesContainers: string;
    importDocumentsNotMentionedCertificate: string;
    numberOfLineItems: string;
    shipmentType: string;
    shipmentDetails: string;
    totalQuantity: number;
    incomingQuantity: number;
    leftoverQuantity: number;
    comments: string;
    companyUsualDisclaimer: string;
    name: string;
    meta: Meta;
}
export declare const ReleaseSchema: mongoose.Schema<Release, mongoose.Model<Release, any, any, any, mongoose.Document<unknown, any, Release> & Omit<Release & Required<{
    _id: Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Release, mongoose.Document<unknown, {}, mongoose.FlatRecord<Release>> & Omit<mongoose.FlatRecord<Release> & Required<{
    _id: Types.ObjectId;
}>, never>>;
