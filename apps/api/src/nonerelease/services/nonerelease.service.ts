import { Injectable } from '@nestjs/common';

import {
  CreateNoneReleaseDto,
  IFindOptions,
  IMeta,
  ModulesCodes,
  ModulesSettings,
  NoneRelease,
  UpdateNoneReleaseDto,
} from '@app/common';
import { FilterQuery } from 'mongoose';
import { OrgsService } from '../../orgs/org.service';
import { NoneReleaseRepository } from '@app/common/dbhelper';

@Injectable()
export class NoneReleaseService {
  constructor(
    private readonly noneReleaseRepository: NoneReleaseRepository,
    private readonly orgsService: OrgsService,
  ) { }

  async create(createNoneReleaseDto: CreateNoneReleaseDto, meta: IMeta) {
    const id = await this.orgsService.generateSequenceNumber(
      meta.orgInfo.code,
      ModulesCodes.nonrelease,
      ModulesSettings.nonReleaseSettings,
    );
    return this.noneReleaseRepository.create({
      ...createNoneReleaseDto,
      id,
      meta,
    });
  }
  async update(
    _id: string,
    updateNoneReleaseDto: UpdateNoneReleaseDto,
    meta: IMeta,
  ) {
    return this.noneReleaseRepository.update(
      { _id },
      { ...updateNoneReleaseDto, meta },
    );
  }
  // handle pagination later
  async getAll(filterQuery: FilterQuery<NoneRelease>, options?: IFindOptions) {
    return this.noneReleaseRepository.find(filterQuery, options);
  }
  async getOne(_id: string) {
    return this.noneReleaseRepository.findOne({ _id });
  }
  async delete(_id: string) {
    return this.noneReleaseRepository.findOneAndDelete({ _id });
  }
  async status(
    _id: string,
    status: string,
    updateNoneReleaseDto: UpdateNoneReleaseDto,
  ) {
    // handle status later
    return this.noneReleaseRepository.findOneAndDelete({ _id });
  }
}
