import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { PopulateOptions } from 'mongoose';

export interface IBaseQueryParams {
  sort?: any;
  limit?: number;
  page?: number;
  skip?: number;
  filter?: any;
  onlyActive?: string;
  onlyInActive?: string;
  project?: any;
  otherQueryOptions?: any[];
  rquired?: false;
}

export type IFilterQueryType =
  | 'equals'
  | 'or'
  | 'contains'
  | 'lessThanOrEqual'
  | 'greaterThanOrEqual'
  | 'inRange';
export interface IFilterQuery {
  values?: string[];
  filterType: 'text' | 'date' | 'set';
  type: IFilterQueryType;
  filter: string;
  dateFrom?: string;
  dateTo?: string;
}


export interface IFindOptions {
  select?: any;
  sort?: any;
  limit?: number;
  page?: number;
  skip?: number;
  populate?: PopulateOptions;
  populateProjectionKeys?: string;
}
