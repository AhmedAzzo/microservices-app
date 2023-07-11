import { IBase } from "./base.interface";
import { ICountry, IIsdCodes, ILanguage, IMeta } from "./shared.interface";

export interface ISettings extends IBase {
    id: string;
    name: string;
    code: string;
    countries: ICountry[];
    languages: ILanguage[];
    isdCodes: IIsdCodes[];

}
