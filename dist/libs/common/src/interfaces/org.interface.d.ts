import { IBase } from "./base.interface";
import { IContact, ModuleSettings, ILocation, IMeta } from "./shared.interface";
export interface IOrg extends IBase {
    id: string;
    name: string;
    orgDisplayName: string;
    orgLogo: string;
    code: string;
    status: string;
    location: ILocation;
    contact: IContact;
    orgType: string;
    moduleSettings: {
        categorySettings: ModuleSettings;
        subCategorySettings: ModuleSettings;
        productSettings: ModuleSettings;
        workspaceSettings: ModuleSettings;
        userSettings: ModuleSettings;
        nonReleaseSettings: ModuleSettings;
        releaseSettings: ModuleSettings;
        orderSettings: ModuleSettings;
        workflowSettings: ModuleSettings;
        actionSettings: ModuleSettings;
    };
    meta: IMeta;
}
