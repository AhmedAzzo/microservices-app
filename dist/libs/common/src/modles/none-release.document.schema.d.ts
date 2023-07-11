import { AbstractDocument, INoneReleaseDocument } from '@app/common';
import { Meta } from './shared.schema';
import mongoose, { Types } from 'mongoose';
export declare class NoneRelease extends AbstractDocument implements INoneReleaseDocument {
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
export declare const NoneReleaseSchema: mongoose.Schema<NoneRelease, mongoose.Model<NoneRelease, any, any, any, mongoose.Document<unknown, any, NoneRelease> & Omit<NoneRelease & Required<{
    _id: Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, NoneRelease, mongoose.Document<unknown, {}, mongoose.FlatRecord<NoneRelease>> & Omit<mongoose.FlatRecord<NoneRelease> & Required<{
    _id: Types.ObjectId;
}>, never>>;
