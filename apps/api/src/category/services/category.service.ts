
import {
  Category,
  CreateCategoryDto,
  IMeta,
  ModulesCodes,
  ModulesSettings,
  IBaseQueryParams,
  UpdateCategoryDto,
} from '@app/common';
import { CategoryRepository } from '@app/common/dbhelper';
import { Injectable } from '@nestjs/common';
import { FilterQuery, Types } from 'mongoose';

import { OrgsService } from '../../orgs/org.service';

@Injectable()
export class CategoryService {
  constructor(
    private readonly categoryRepository: CategoryRepository,
    private readonly orgsService: OrgsService,
  ) { }

  async create(createCategoryDto: CreateCategoryDto, meta: IMeta) {
    const id = await this.orgsService.generateSequenceNumber(
      meta.orgInfo.code,
      ModulesCodes.category,
      ModulesSettings.categorySettings,
    );

    return this.categoryRepository.create({ ...createCategoryDto, id, meta });
  }
  async update(
    _id: string,
    updateCategoryDto: UpdateCategoryDto,
    meta: IMeta,
  ) {
    return this.categoryRepository.update(
      { _id },
      { ...updateCategoryDto, meta },
    );
  }
  async getAll(filterQuery: FilterQuery<Category>, options?: IBaseQueryParams) {
    return this.categoryRepository.find(filterQuery, options);
  }
  async getOne(_id: string | Types.ObjectId) {
    return this.categoryRepository.findOne({ _id });
  }
  async delete(_id: string) {
    return this.categoryRepository.findOneAndDelete({ _id });
  }
}
