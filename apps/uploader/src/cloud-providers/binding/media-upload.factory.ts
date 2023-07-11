import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PROVIDERS } from '../../enums';

@Injectable()
export class MediaUploadFactory implements IMediaUploadFactory {



	BUCKET_NAME;
	allowedMimeTypes = [
		'image/png',
		'image/jpeg',
		'application/pdf',
		'image/svg+xml',
		'image/gif',
		'image/ief',
		'application/vnd.ms-excel',
		'application/msword',
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	];
	allowedFileExtensions = ['png', 'jpg', 'jpeg', 'jfif', 'pjpeg', 'pjp', 'gif', 'svg', 'ief', 'xls', 'xlsx', 'doc', 'docx', 'pdf'];
	invalidFileNameRegex = /[`!@#$%^*+\=\;':"\\|<>\/?~]/;

	getFileName(file: { buffer?: any; size?: any; originalname: any }, orgCode: any, entity: any, mediaType: any) {
		const now = Math.ceil(new Date().getTime() / 1000);
		const fileNameNormalised = file.originalname.split(' ').join('_');
		const fileName = `${orgCode}/${entity}/${mediaType}/${now}-${fileNameNormalised}`;
		return fileName;
	}

	generalUpload(file: any, mediaType: string, entity: string, res: any): void {
		throw new Error('Method not implemented, please set MEDIA_UPLOAD_STRATEGY in env to an accepted value');
	}

	uploadMedia(file: any, mediaType: string, entity: string, res: any, orgCode: string): Promise<void> {
		throw new Error('Method not implemented, please set MEDIA_UPLOAD_STRATEGY in env to an accepted value');
	}

	isMediaTypeValid(mimetype: any, fileName: string) {
		const extention: any = fileName.split('.').pop();
		return this.allowedMimeTypes.includes(mimetype) && this.allowedFileExtensions.includes(extention ? extention.toLowerCase() : '');
	}

	isValidFileName(fileName: string) {
		return !this.invalidFileNameRegex.test(fileName);
	}

	isExecutable(file: { buffer?: any; size?: any; originalname: any }) {
		//Should be replaced with a permanent solution to check whether the file is executable or not
		return file.buffer.toString('utf8', 0, 2) == '#!';
	}
}

interface IMediaUploadFactory {
	generalUpload(file: any, mediaType: string, entity: string, res: any): void;
	uploadMedia(file: any, mediaType: string, entity: string, res: any, orgCode: string): Promise<void>;
}
