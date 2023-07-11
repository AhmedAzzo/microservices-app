import { IProperty } from '@app/common/interfaces';
import { PopulateOptionsDto } from './populateOptions.dto';
export declare class FindOptionDto {
    select?: IProperty;
    sort?: any;
    populate?: PopulateOptionsDto;
    populateProjectionKeys?: string;
    limit: number;
    skip: number;
    page: number;
}
