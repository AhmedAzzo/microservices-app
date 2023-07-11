import {
  CreateSubCategoryDto,
  IBaseQueryParams,
  IMeta,
  ModulesCodes,
  ModulesSettings,
  SubCategory,
  UpdateSubCategoryDto,
} from '@app/common';
import { SubCategoryRepository } from '@app/common/dbhelper';
import { Injectable } from '@nestjs/common';

import { OrgsService } from '../../orgs/org.service';
import { FilterQuery, Types } from 'mongoose';

@Injectable()
export class SubCategoryService {
  constructor(
    private readonly categoryRepository: SubCategoryRepository,
    private readonly orgsService: OrgsService,
  ) {}

  async create(createCategoryDto: CreateSubCategoryDto, meta: IMeta) {
    const id = await this.orgsService.generateSequenceNumber(
      meta.orgInfo.code,
      ModulesCodes.category,
      ModulesSettings.categorySettings,
    );

    return this.categoryRepository.create({ ...createCategoryDto, id, meta });
  }
  async update(
    _id: string,
    updateCategoryDto: UpdateSubCategoryDto,
    meta: IMeta,
  ) {
    return this.categoryRepository.findOneAndUpdate(
      { _id },
      { ...updateCategoryDto, meta },
    );
  }

  async getAll(
    filterQuery: FilterQuery<SubCategory>,
    options?: IBaseQueryParams,
  ) {
    return this.categoryRepository.find(filterQuery, options);
  }
  async getOne(_id: string) {
    return this.categoryRepository.findOne({ _id });
  }
  async delete(_id:string| Types.ObjectId) {
    return this.categoryRepository.findOneAndDelete({ _id });
  }
}
