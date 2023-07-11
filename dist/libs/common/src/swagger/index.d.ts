import { INestApplication } from '@nestjs/common';
import { OpenAPIObject } from '@nestjs/swagger';
export interface SwaggerConfig {
    title: string;
    description: string;
    version: string;
    tags: string[];
}
export declare function createDocument(app: INestApplication): OpenAPIObject;
