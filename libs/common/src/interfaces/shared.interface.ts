export interface IContact {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
}
export interface IMeta {
    orgInfo: IOrgInfo;
    createdBy: {
        orgId: string;
        performerId: string;
    },
    updatedBy: {
        orgId: string;
        performerId: string;
    },
    createdDate: Date;
    updatedDate: Date;
}


export interface ILocation {
    name: string;
    description: string;
    address: IAddress
}
export interface IAddress {
    addressType: string,
    city: string,
    street: string,
    provinceState: string,
    country: string,
    postalCode: string,
    latitude: string,
    longitude: string
}
export interface ILanguage {
    code: string,
    description: string,

}
export interface ICountry {
    code: string,
    description: string,

}
export interface IIsdCodes {
    code: string,
    description: string,
    name: string,
}
export interface ModuleSettings {
    counter: ICounter;
}
export interface ICounter {
    start: number;
    value: number;
}
export interface IOrgInfo {
    id: string;
    code: string;
    name: string
}