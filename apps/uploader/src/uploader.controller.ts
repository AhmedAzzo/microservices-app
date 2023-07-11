import { JwtAuthGuard } from '@app/common/auth';
import { Controller, Get, Param, Post, Req, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { MediaUploadFactory } from './cloud-providers';
import { FileUploadDto } from './dtos/file.uploader.dto';
import { UploaderService } from './uploader.service';

@ApiTags('uploader')
@Controller('uploader')
export class UploaderController {
  constructor(
    private readonly uploaderService: UploaderService,
    private readonly mediaUploadFactory: MediaUploadFactory
  ) { }

  // upload an image for a product.
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: FileUploadDto })
  // @Post('/:mediaType/:entity/') // comment this section for now, and we can use it to create new directories in provider depending on this data like org id.
  @Post('/')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  async uploadUserFile(
    @UploadedFile() file,
    // @Param('mediaType') mediaType: string,
    // @Param('entity') entity: string,
    @Res() res,
    @Req() req
  ) {
    const mediaType = 'image';
    const entity = 'images';
    this.mediaUploadFactory.generalUpload(file, mediaType, entity, res);
  }
}
