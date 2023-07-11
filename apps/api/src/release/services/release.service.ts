import { Injectable } from '@nestjs/common';

import {
  CreateReleaseDto,
  IBaseQueryParams,
  IMeta,
  ModulesCodes,
  ModulesSettings,
  Release,
  UpdateReleaseDto,
} from '@app/common';
import { FilterQuery, Types } from 'mongoose';

import { OrgsService } from '../../orgs/org.service';
import { ReleaseRepository } from '@app/common/dbhelper';

@Injectable()
export class ReleaseService {
  constructor(
    private readonly releaseRepository: ReleaseRepository,
    private readonly orgsService: OrgsService,
  ) { }

  async create(createReleaseDto: CreateReleaseDto, meta: IMeta) {
    const id = await this.orgsService.generateSequenceNumber(
      meta.orgInfo.code,
      ModulesCodes.release,
      ModulesSettings.releaseSettings,
    );

    return this.releaseRepository.create({ ...createReleaseDto, id, meta });
  }
  async update(
    _id:string| Types.ObjectId,
    updateReleaseDto: UpdateReleaseDto,
    meta: IMeta,
  ) {
    return this.releaseRepository.update(
      { _id },
      { ...updateReleaseDto, meta },
    );
  }
  // handle pagination later
  async getAll(filterQuery: FilterQuery<Release>, options?: IBaseQueryParams) {
    return this.releaseRepository.find(filterQuery, options);
  }
  async getOne(_id: Types.ObjectId | string) {
    return this.releaseRepository.findOne({ _id });
  }
  async delete(_id: string) {
    return this.releaseRepository.findOneAndDelete({ _id });
  }
}
