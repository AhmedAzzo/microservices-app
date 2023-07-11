import { Injectable } from '@nestjs/common';
import { BaseFactory } from '@app/common/base/Base.factory';
import { RolesRepository } from '@app/common/dbhelper';



@Injectable()
export class RolesService extends BaseFactory {
    constructor(private readonly rolesRepository: RolesRepository) {
        super(rolesRepository)
    }
}
