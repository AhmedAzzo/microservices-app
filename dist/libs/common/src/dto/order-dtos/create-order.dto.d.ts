import { Products } from '@app/common/modles';
export declare class CreateOrderDto {
    cocNo: string;
    registrationNo: string;
    referenceNo: string;
    issuanceDate: Date;
    expDateOfCoc: Date;
    importer: string;
    importerAddress: string;
    importerCountry: string;
    importerCity: string;
    exporter: string;
    exporterAddress: string;
    exporterCountry: string;
    exporterCity: string;
    invoiceAmount: number;
    invoiceCurrency: string;
    invoiceNo: string;
    invoiceDate: Date;
    methodOfShipment: string;
    countryOfShipment: string;
    documentNumber: number;
    documentDate: Date;
    declaredPointOfEntry: string;
    packingDetails: string;
    numberAndTypeOfPackages: number;
    containersOrTruckDetails: string;
    containersOrTruckAndSealNumbers: number;
    products: Products[];
    remarks: string;
    dateOfAssessment: Date;
    invoiceValueInUsd: number;
    declaredValuePerContainer: number;
    nameAndSignature: string;
    officeIssuing: string;
    logo: string;
    meta: any;
}