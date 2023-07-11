import { Injectable } from "@nestjs/common";
import { AbstractRepository } from "../database";
import { ErrorsFactory } from "./Errors.factory";
@Injectable()
export class BaseFactory extends ErrorsFactory {
    repository: AbstractRepository<any>
    constructor(repository: AbstractRepository<any>) {
        super();
        this.repository = repository;
    }
    async generateSequenceNumber(
        orgCode: string,
        moduleCode: string,
        target: string,
        options: { onlyNumber?: boolean } = {}
    ): Promise<string> {
        const incQuery = {};
        incQuery[`moduleSettings.${target}.counter.value`] = 1;
        const orgSettings = await this.repository.findOneAndUpdate({ "meta.orgInfo.code": orgCode },
            { $inc: incQuery },
        );
        if (!orgSettings) {
            this.throwNotFoundError('org data is missing.');
        }
        const seqNumber = orgSettings.moduleSettings[target].counter.value;
        if (options.onlyNumber) return seqNumber.toString();
        if (!orgCode || !moduleCode || !seqNumber) {
            this.throwInternalServerError('org code, module code or seq number missing.');
        }
        return `${orgCode}-${moduleCode}-${seqNumber}`;
    }
}