import { AbstractRepository } from "../database";
import { ErrorsFactory } from "./Errors.factory";
export declare class BaseFactory extends ErrorsFactory {
    repository: AbstractRepository<any>;
    constructor(repository: AbstractRepository<any>);
    generateSequenceNumber(orgCode: string, moduleCode: string, target: string, options?: {
        onlyNumber?: boolean;
    }): Promise<string>;
}
