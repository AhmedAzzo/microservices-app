export class ChangeOrderStatusEvent {
    constructor(public readonly data: {status : string, _id : string, action: 'create' | 'update'}) { }
}
