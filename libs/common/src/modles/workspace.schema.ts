import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument, IWorkspace, WorkspaceStatus } from '@app/common';
import { Location, Meta } from './shared.schema';
import { Types } from 'mongoose';

@Schema({ versionKey: false, timestamps: true })
export class Workspace extends AbstractDocument implements IWorkspace {

    @Prop({
        type: String,
        unique: true,
        required: true,
    })
    id: string;

    @Prop({
        type: String,
    })
    name: string;

    @Prop({
        type: String,
    })
    description: string;

    @Prop([{ type: Types.ObjectId, ref: 'users' }])
    users: Types.ObjectId[];
    @Prop({
        type: String,
    })
    status: WorkspaceStatus;

    @Prop({ type: Location })
    location: Location;

    @Prop({ type: Meta })
    meta: Meta;

}

export const WorkspaceSchema = SchemaFactory.createForClass(Workspace);
