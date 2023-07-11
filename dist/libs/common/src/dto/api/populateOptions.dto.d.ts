export declare class PopulateOptionsDto {
    path: string;
    select?: string | object;
    match?: object;
    model?: string | Function;
    populate?: PopulateOptionsDto | PopulateOptionsDto[];
    options?: object;
    perDocumentLimit?: number;
    overwrite?: object;
    docOptions?: object;
}
