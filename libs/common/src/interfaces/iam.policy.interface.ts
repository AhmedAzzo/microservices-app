import { IBase } from "./base.interface";

export interface IIamPolicy extends IBase {
    policyName: string;
    controller: string;
    policy: Policy;
}

export interface Policy {
    action: string;
    scope: string;
}
