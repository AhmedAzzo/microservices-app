import { Types } from 'mongoose';
export declare class CreateNoneReleaseDto {
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
    meta: any;
}
