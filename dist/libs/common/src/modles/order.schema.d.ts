import { AbstractDocument } from '@app/common';
import mongoose from 'mongoose';
import { Meta } from './shared.schema';
export declare class Products {
    qty: number;
    goodsValue: string;
    originAsMarkedOnGoods: string;
    description: string;
    iQStandardNo: string;
    product: string;
}
export declare class Order extends AbstractDocument {
    id: string;
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
    status: string;
    meta: Meta;
}
export declare const OrderSchema: mongoose.Schema<Order, mongoose.Model<Order, any, any, any, mongoose.Document<unknown, any, Order> & Omit<Order & Required<{
    _id: mongoose.Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Order, mongoose.Document<unknown, {}, mongoose.FlatRecord<Order>> & Omit<mongoose.FlatRecord<Order> & Required<{
    _id: mongoose.Types.ObjectId;
}>, never>>;
