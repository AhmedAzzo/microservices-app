import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument, ISettings } from '@app/common';
import { Country, IsdCodes, Language, } from './shared.schema';

@Schema({ versionKey: false, timestamps: true })
export class Settings extends AbstractDocument implements ISettings {
    @Prop({
        type: String,
        unique: true,
        required: true,
    })
    id: string;

    @Prop({
        type: String,
        required: true,
    })
    name: string;

    @Prop({
        type: String,
        required: true,
    })
    code: string;

    @Prop([{
        type: Country,
    }])
    countries: Country[];

    @Prop([{
        type: Language,
    }])
    languages: Language[];

    @Prop([{
        type: IsdCodes,
    }])
    isdCodes: IsdCodes[];
}

export const SettingsSchema = SchemaFactory.createForClass(Settings);
