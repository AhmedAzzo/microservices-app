import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument, IRole } from '@app/common';
import { Types } from 'mongoose';
import { Meta } from './shared.schema';

@Schema({ versionKey: false, timestamps: true })
export class Role extends AbstractDocument implements IRole {

    @Prop({
        type: String,
        unique: true,
        required: true,
    })
    id: string;

    @Prop({
        type: String,
    })
    status: string;

    @Prop({
        type: String,
    })
    code: string;

    @Prop({
        type: String,
    })
    name: string;

    @Prop({
        type: String,
    })
    description: string;

    @Prop({
        type: String,
    })
    displayName: string;

    @Prop([{ type: Types.ObjectId, ref: 'iampolicies' }])
    iampolicies: Types.ObjectId[];

}

export const RoleSchema = SchemaFactory.createForClass(Role);
