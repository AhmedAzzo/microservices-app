
import { Storage } from '@google-cloud/storage';
import { HttpStatus, Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import * as path from 'path';
import * as stream from 'stream';
import { PROVIDERS } from '../../enums';
import { MediaUploadFactory } from '../binding';

@Injectable()
export class GoogleUploader extends MediaUploadFactory implements OnModuleInit {
	gcs = new Storage({});
	constructor(
		private readonly configService: ConfigService,
	) {
		super();
	}

	onModuleInit() {

		this.gcs = new Storage({
			projectId: this.configService.get('PROJECT_ID'),
			credentials: {
				client_email: this.configService.get('CLIENT_EMAIL'),
				private_key: this.configService.get('PRIVATE_KEY'),
			},
		});
		this.BUCKET_NAME = this.configService.get('BUCKET');
	}

	generalUpload(file, mediaType: string, entity: string, res) {
		this.uploadMedia(file, mediaType, entity, res, 'tuv');
	}

	async uploadMedia(file, mediaType: string, entity: string, res, orgCode: string) {
		let uploadStatus = {} as any;
		if (!this.isMediaTypeValid(file.mimetype, file.originalname)) {
			uploadStatus = {
				status: 'failure',
				error: `Invalid file type`,
			};
			res.status(HttpStatus.BAD_REQUEST).send(uploadStatus);
		}
		if (!this.isValidFileName(file.originalname)) {
			uploadStatus = {
				status: 'failure',
				error: `File names which contains special characters  \`!@#$%^&*+\=\;':"\\|,<>\/?~  are not allowed`,
			};
			res.status(HttpStatus.BAD_REQUEST).send(uploadStatus);
		}
		if (this.isExecutable(file)) {
			uploadStatus = {
				status: 'failure',
				error: ` Executable files are not allowed`,
			};
			res.status(HttpStatus.BAD_REQUEST).send(uploadStatus);
		}
		const fileName = this.getFileName(file, orgCode, entity, mediaType);
		const bucket = this.gcs.bucket('tuv-media');
		const bufferStream = new stream.PassThrough();
		bufferStream.end(Buffer.from(file.buffer, file.encoding));

		//file name creation
		const gcFile = bucket.file(fileName);
		bufferStream
			.pipe(
				gcFile.createWriteStream({
					contentType: file.mimetype,
					gzip: false,
					resumable: false,
				})
			)
			.on('error', (err) => {
				uploadStatus = {
					status: 'failure',
					error: err,
				};
				console.log(err);
				res.send(uploadStatus);
			})
			.on('finish', () => {
				console.log(fileName + ' uploaded successfully');
				uploadStatus = {
					status: 'success',
					path: `https://storage.googleapis.com/${this.BUCKET_NAME}/${fileName}`,
				};
				res.send({ uploadStatus });
			});
	}
}
