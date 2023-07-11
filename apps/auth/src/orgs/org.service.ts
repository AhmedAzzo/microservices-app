import { Injectable } from '@nestjs/common';
import { BaseFactory } from '@app/common/base/Base.factory';
import { OrgsRepository } from '@app/common/dbhelper';


@Injectable()
export class OrgsService extends BaseFactory {
    constructor(private readonly orgsRepository: OrgsRepository) {
        super(orgsRepository)
    }
}
