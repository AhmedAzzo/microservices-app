import { Prop, Schema } from "@nestjs/mongoose";
import { IMeta } from "../interfaces";


export class OrgInfo {
    @Prop({
        type: String,
    })
    id: string;
    @Prop({
        type: String,
    })
    code: string;
    @Prop({
        type: String,
    })
    name: string
}

export class CreatedBy {
    @Prop({
        type: String,
    })
    orgId: string;
    @Prop({
        type: String,
    })
    performerId: string;
}
export class UpdatedBy {
    @Prop({
        type: String,
    })
    orgId: string;
    @Prop({
        type: String,
    })
    performerId: string;
}


@Schema()
export class Meta implements IMeta {
    @Prop({ type: OrgInfo })
    orgInfo: OrgInfo;

    @Prop({ type: CreatedBy })
    createdBy: CreatedBy;

    @Prop({ type: UpdatedBy })
    updatedBy: UpdatedBy;

    @Prop({ type: Date })
    createdDate: Date;

    @Prop({ type: Date })
    updatedDate: Date;

}
// Location 
@Schema()
export class Address {
    @Prop({ type: String })
    addressType: string;
    @Prop({ type: String })
    city: string;
    @Prop({ type: String })
    street: string;
    @Prop({ type: String })
    provinceState: string;
    @Prop({ type: String })
    country: string;
    @Prop({ type: String })
    postalCode: string;
    @Prop({ type: String })
    latitude: string;
    @Prop({ type: String })
    longitude: string;
}

@Schema()
export class Location {
    @Prop({ type: String })
    name: string;

    @Prop({ type: String })
    description: string;

    @Prop({ type: Address })
    address: Address;
}

@Schema()
export class Contact {
    @Prop({ type: String })
    firstName: string;
    @Prop({ type: String })
    lastName: string;
    @Prop({ type: String })
    phone: string;
    @Prop({ type: String })
    email: string;
}

@Schema()
export class Counter {
    @Prop({ type: Number })
    start: number;
    @Prop({ type: String })
    value: number;
}
// Setings section


export class CategorySettings {
    @Prop({ type: Counter })
    counter: Counter;
}

export class SubCategorySettings {
    @Prop({ type: Counter })
    counter: Counter;
}

export class ProductSettings {
    @Prop({ type: Counter })
    counter: Counter;
}

export class WorkspaceSettings {
    @Prop({ type: Counter })
    counter: Counter;
}
export class UserSettings {
    @Prop({ type: Counter })
    counter: Counter;
}


export class NonReleaseSettings {
    @Prop({ type: Counter })
    counter: Counter;
}
export class ReleaseSettings {
    @Prop({ type: Counter })
    counter: Counter;
}

export class OrderSettings {
    @Prop({ type: Counter })
    counter: Counter;
}

export class WorkflowSettings {
    @Prop({ type: Counter })
    counter: Counter;
}
export class ActionSettings {
    @Prop({ type: Counter })
    counter: Counter;
}

// settings main object
@Schema()
export class ModuleSettings {
    @Prop({ type: CategorySettings })
    categorySettings: CategorySettings;

    @Prop({ type: SubCategorySettings })
    subCategorySettings: SubCategorySettings;

    @Prop({ type: ProductSettings })
    productSettings: ProductSettings;

    @Prop({ type: WorkspaceSettings })
    workspaceSettings: WorkspaceSettings;

    @Prop({ type: UserSettings })
    userSettings: UserSettings;

    @Prop({ type: NonReleaseSettings })
    nonReleaseSettings: NonReleaseSettings;


    @Prop({ type: ReleaseSettings })
    releaseSettings: ReleaseSettings;

    @Prop({ type: OrderSettings })
    orderSettings: OrderSettings;

    @Prop({ type: WorkflowSettings })
    workflowSettings: WorkflowSettings;

    @Prop({ type: ActionSettings })
    actionSettings: ActionSettings;

}


// Country schema
@Schema()
export class Country {
    @Prop({ type: String })
    description: string;

    @Prop({ type: String })
    code: string;
}
// Language schema
@Schema()
export class Language {
    @Prop({ type: String })
    description: string;

    @Prop({ type: String })
    code: string;
}
// ISD Codes schema
@Schema()
export class IsdCodes {
    @Prop({ type: String })
    description: string;

    @Prop({ type: String })
    code: string;

    @Prop({ type: String })
    name: string;
}

