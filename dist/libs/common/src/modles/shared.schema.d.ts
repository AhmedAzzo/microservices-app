import { IMeta } from "../interfaces";
export declare class OrgInfo {
    id: string;
    code: string;
    name: string;
}
export declare class CreatedBy {
    orgId: string;
    performerId: string;
}
export declare class UpdatedBy {
    orgId: string;
    performerId: string;
}
export declare class Meta implements IMeta {
    orgInfo: OrgInfo;
    createdBy: CreatedBy;
    updatedBy: UpdatedBy;
    createdDate: Date;
    updatedDate: Date;
}
export declare class Address {
    addressType: string;
    city: string;
    street: string;
    provinceState: string;
    country: string;
    postalCode: string;
    latitude: string;
    longitude: string;
}
export declare class Location {
    name: string;
    description: string;
    address: Address;
}
export declare class Contact {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
}
export declare class Counter {
    start: number;
    value: number;
}
export declare class CategorySettings {
    counter: Counter;
}
export declare class SubCategorySettings {
    counter: Counter;
}
export declare class ProductSettings {
    counter: Counter;
}
export declare class WorkspaceSettings {
    counter: Counter;
}
export declare class UserSettings {
    counter: Counter;
}
export declare class NonReleaseSettings {
    counter: Counter;
}
export declare class ReleaseSettings {
    counter: Counter;
}
export declare class OrderSettings {
    counter: Counter;
}
export declare class WorkflowSettings {
    counter: Counter;
}
export declare class ActionSettings {
    counter: Counter;
}
export declare class ModuleSettings {
    categorySettings: CategorySettings;
    subCategorySettings: SubCategorySettings;
    productSettings: ProductSettings;
    workspaceSettings: WorkspaceSettings;
    userSettings: UserSettings;
    nonReleaseSettings: NonReleaseSettings;
    releaseSettings: ReleaseSettings;
    orderSettings: OrderSettings;
    workflowSettings: WorkflowSettings;
    actionSettings: ActionSettings;
}
export declare class Country {
    description: string;
    code: string;
}
export declare class Language {
    description: string;
    code: string;
}
export declare class IsdCodes {
    description: string;
    code: string;
    name: string;
}
