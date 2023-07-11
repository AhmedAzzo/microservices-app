/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiProperty } from '@nestjs/swagger';

// FileUploadDto;
export class FileUploadDto {
    @ApiProperty({ type: 'string', format: 'binary' })
    file: any;
}
