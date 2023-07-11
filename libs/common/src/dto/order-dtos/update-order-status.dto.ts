import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class UpdateOrderStatusDto {
  @IsNotEmpty()
  @IsEnum(['draft', 'partial-approved', 'approved', 'rejected'])
  @ApiProperty({
    type: String,
    default: 'draft',
    required: true,

    enum: ['draft', 'partial-approved', 'approved', 'rejected'],
  })
  status: string;
}


export type StatusDto = UpdateOrderStatusDto['status'];