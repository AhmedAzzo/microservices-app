import { Action, IBaseQueryParams } from '@app/common';
import { ActionsRepository } from '@app/common/dbhelper';
import { Injectable } from '@nestjs/common';
import { FilterQuery, Types } from 'mongoose';

@Injectable()
export class ActionsService {
  constructor(private readonly actionRepo: ActionsRepository) {}

  async getAll(filterQuery: FilterQuery<Action>, options?: IBaseQueryParams) {
    return this.actionRepo.find(filterQuery, options);
  }
  async getOne(_id: string | Types.ObjectId) {
    return this.actionRepo.findOne({ _id });
  }
}
