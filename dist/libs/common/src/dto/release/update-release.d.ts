import { Meta } from '@app/common/modles/shared.schema';
export declare class UpdateReleaseDto {
    order: string;
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
