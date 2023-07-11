import {
  CreateProductDto,
  IBaseQueryParams,
  IMeta,
  ModulesCodes,
  ModulesSettings,
  Product,
  UpdateProductDto,
} from '@app/common';
import { ProductRepository } from '@app/common/dbhelper';
import { Injectable } from '@nestjs/common';
import { OrgsService } from '../../orgs/org.service';
import { FilterQuery } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly orgsService: OrgsService,
  ) { }

  async create(createProductDto: CreateProductDto, meta: IMeta) {
    const id = await this.orgsService.generateSequenceNumber(
      meta.orgInfo.code,
      ModulesCodes.product,
      ModulesSettings.productSettings,
    );

    return this.productRepository.create({ ...createProductDto, id, meta });
  }
  async update(_id: string, updateProductDto: UpdateProductDto, meta: IMeta) {
    return this.productRepository.update(
      { _id },
      { ...updateProductDto, meta },
    );
  }

  async getAll(filterQuery: FilterQuery<Product>, options?: IBaseQueryParams) {
    return this.productRepository.find(filterQuery, options);
  }
  async getOne(_id: string) {
    return this.productRepository.findOne({ _id });
  }
  async delete(_id: string) {
    return this.productRepository.findOneAndDelete({ _id });
  }
}
