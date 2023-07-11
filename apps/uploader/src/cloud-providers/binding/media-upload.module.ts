import { ClassProvider, DynamicModule, Module, Type } from '@nestjs/common';
import { MEDIA_UPLOAD_STRATEGY } from '../../enums';
import { GoogleUploader } from '../gcp/google.uploader';
import { MediaUploadFactory } from './media-upload.factory';

@Module({})
export class MediaUploadModule {
	public static register(): DynamicModule {
		const MediaUploadClassProvider = MediaUploadModule.getClassProvider();
		return {
			module: MediaUploadModule,
			providers: [MediaUploadClassProvider],
			exports: [MediaUploadClassProvider],
		};
	}

	private static getClassProvider(): ClassProvider<MediaUploadModule> {
		const MediaUploaderClass = MediaUploadModule.getClassFromStrategy(MEDIA_UPLOAD_STRATEGY['GOOGLE']);
		return {
			provide: MediaUploadFactory,
			useClass: MediaUploaderClass,
		};
	}

	private static getClassFromStrategy(strategy: MEDIA_UPLOAD_STRATEGY): Type<MediaUploadFactory> {
		switch (strategy) {
			case MEDIA_UPLOAD_STRATEGY.GOOGLE:
				return GoogleUploader;
			default:
				return GoogleUploader;
		}
	}
}
