import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument, IOrg, OrgStatus, OrgType } from '@app/common';
import { Contact, Location, Meta, ModuleSettings } from './shared.schema';

@Schema({ versionKey: false, timestamps: true })
export class Org extends AbstractDocument implements IOrg {

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
  })
  orgDisplayName: string;

  @Prop({
    type: String,
  })
  orgLogo: string;

  @Prop({
    type: String,
  })
  code: string;

  @Prop({
    type: String,
    required: true,
  })
  status: OrgStatus;

  @Prop({
    type: Location
  })
  location: Location;

  @Prop({
    type: Contact
  })
  contact: Contact;

  @Prop({
    type: String,
  })
  orgType: OrgType;

  @Prop({
    type: ModuleSettings,
  })
  moduleSettings: ModuleSettings;
  @Prop({ type: Meta })
  meta: Meta;
}

export const OrgSchema = SchemaFactory.createForClass(Org);
