import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';

export class IdDto {
  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: '',
    required: true,
  })
  id: string;
}
