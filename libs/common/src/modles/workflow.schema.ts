import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument, IWorkflow } from '@app/common';
import { Meta } from './shared.schema';

@Schema({ versionKey: false, timestamps: true })
export class Workflow extends AbstractDocument implements IWorkflow {
    @Prop({
        type: String,
        unique: true,
        required: true,
    })
    id: string;

    @Prop({ type: Meta })
    meta: Meta;
}

export const WorkflowSchema = SchemaFactory.createForClass(Workflow);
