import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument, IIamPolicy } from '@app/common';

@Schema()
class Policy {
    @Prop({
        type: String,
    })
    action: string;
    @Prop({
        type: String
    })
    scope: string
}

@Schema({ versionKey: false, timestamps: true })
export class IamPolicy extends AbstractDocument implements IIamPolicy {

    @Prop({
        type: String,
    })
    policyName: string;

    @Prop({
        type: String,
    })
    controller: string;

    @Prop({ type: Policy })
    policy: Policy
}


export const IamPolicySchema = SchemaFactory.createForClass(IamPolicy);