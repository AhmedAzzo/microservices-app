"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsdCodes = exports.Language = exports.Country = exports.ModuleSettings = exports.ActionSettings = exports.WorkflowSettings = exports.OrderSettings = exports.ReleaseSettings = exports.NonReleaseSettings = exports.UserSettings = exports.WorkspaceSettings = exports.ProductSettings = exports.SubCategorySettings = exports.CategorySettings = exports.Counter = exports.Contact = exports.Location = exports.Address = exports.Meta = exports.UpdatedBy = exports.CreatedBy = exports.OrgInfo = void 0;
const mongoose_1 = require("@nestjs/mongoose");
class OrgInfo {
}
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], OrgInfo.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], OrgInfo.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], OrgInfo.prototype, "name", void 0);
exports.OrgInfo = OrgInfo;
class CreatedBy {
}
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], CreatedBy.prototype, "orgId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], CreatedBy.prototype, "performerId", void 0);
exports.CreatedBy = CreatedBy;
class UpdatedBy {
}
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], UpdatedBy.prototype, "orgId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], UpdatedBy.prototype, "performerId", void 0);
exports.UpdatedBy = UpdatedBy;
let Meta = class Meta {
};
__decorate([
    (0, mongoose_1.Prop)({ type: OrgInfo }),
    __metadata("design:type", OrgInfo)
], Meta.prototype, "orgInfo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: CreatedBy }),
    __metadata("design:type", CreatedBy)
], Meta.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: UpdatedBy }),
    __metadata("design:type", UpdatedBy)
], Meta.prototype, "updatedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], Meta.prototype, "createdDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], Meta.prototype, "updatedDate", void 0);
Meta = __decorate([
    (0, mongoose_1.Schema)()
], Meta);
exports.Meta = Meta;
let Address = class Address {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Address.prototype, "addressType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Address.prototype, "street", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Address.prototype, "provinceState", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Address.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Address.prototype, "postalCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Address.prototype, "latitude", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Address.prototype, "longitude", void 0);
Address = __decorate([
    (0, mongoose_1.Schema)()
], Address);
exports.Address = Address;
let Location = class Location {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Location.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Location.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Address }),
    __metadata("design:type", Address)
], Location.prototype, "address", void 0);
Location = __decorate([
    (0, mongoose_1.Schema)()
], Location);
exports.Location = Location;
let Contact = class Contact {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Contact.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Contact.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Contact.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Contact.prototype, "email", void 0);
Contact = __decorate([
    (0, mongoose_1.Schema)()
], Contact);
exports.Contact = Contact;
let Counter = class Counter {
};
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], Counter.prototype, "start", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", Number)
], Counter.prototype, "value", void 0);
Counter = __decorate([
    (0, mongoose_1.Schema)()
], Counter);
exports.Counter = Counter;
class CategorySettings {
}
__decorate([
    (0, mongoose_1.Prop)({ type: Counter }),
    __metadata("design:type", Counter)
], CategorySettings.prototype, "counter", void 0);
exports.CategorySettings = CategorySettings;
class SubCategorySettings {
}
__decorate([
    (0, mongoose_1.Prop)({ type: Counter }),
    __metadata("design:type", Counter)
], SubCategorySettings.prototype, "counter", void 0);
exports.SubCategorySettings = SubCategorySettings;
class ProductSettings {
}
__decorate([
    (0, mongoose_1.Prop)({ type: Counter }),
    __metadata("design:type", Counter)
], ProductSettings.prototype, "counter", void 0);
exports.ProductSettings = ProductSettings;
class WorkspaceSettings {
}
__decorate([
    (0, mongoose_1.Prop)({ type: Counter }),
    __metadata("design:type", Counter)
], WorkspaceSettings.prototype, "counter", void 0);
exports.WorkspaceSettings = WorkspaceSettings;
class UserSettings {
}
__decorate([
    (0, mongoose_1.Prop)({ type: Counter }),
    __metadata("design:type", Counter)
], UserSettings.prototype, "counter", void 0);
exports.UserSettings = UserSettings;
class NonReleaseSettings {
}
__decorate([
    (0, mongoose_1.Prop)({ type: Counter }),
    __metadata("design:type", Counter)
], NonReleaseSettings.prototype, "counter", void 0);
exports.NonReleaseSettings = NonReleaseSettings;
class ReleaseSettings {
}
__decorate([
    (0, mongoose_1.Prop)({ type: Counter }),
    __metadata("design:type", Counter)
], ReleaseSettings.prototype, "counter", void 0);
exports.ReleaseSettings = ReleaseSettings;
class OrderSettings {
}
__decorate([
    (0, mongoose_1.Prop)({ type: Counter }),
    __metadata("design:type", Counter)
], OrderSettings.prototype, "counter", void 0);
exports.OrderSettings = OrderSettings;
class WorkflowSettings {
}
__decorate([
    (0, mongoose_1.Prop)({ type: Counter }),
    __metadata("design:type", Counter)
], WorkflowSettings.prototype, "counter", void 0);
exports.WorkflowSettings = WorkflowSettings;
class ActionSettings {
}
__decorate([
    (0, mongoose_1.Prop)({ type: Counter }),
    __metadata("design:type", Counter)
], ActionSettings.prototype, "counter", void 0);
exports.ActionSettings = ActionSettings;
let ModuleSettings = class ModuleSettings {
};
__decorate([
    (0, mongoose_1.Prop)({ type: CategorySettings }),
    __metadata("design:type", CategorySettings)
], ModuleSettings.prototype, "categorySettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: SubCategorySettings }),
    __metadata("design:type", SubCategorySettings)
], ModuleSettings.prototype, "subCategorySettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ProductSettings }),
    __metadata("design:type", ProductSettings)
], ModuleSettings.prototype, "productSettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: WorkspaceSettings }),
    __metadata("design:type", WorkspaceSettings)
], ModuleSettings.prototype, "workspaceSettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: UserSettings }),
    __metadata("design:type", UserSettings)
], ModuleSettings.prototype, "userSettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: NonReleaseSettings }),
    __metadata("design:type", NonReleaseSettings)
], ModuleSettings.prototype, "nonReleaseSettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ReleaseSettings }),
    __metadata("design:type", ReleaseSettings)
], ModuleSettings.prototype, "releaseSettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: OrderSettings }),
    __metadata("design:type", OrderSettings)
], ModuleSettings.prototype, "orderSettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: WorkflowSettings }),
    __metadata("design:type", WorkflowSettings)
], ModuleSettings.prototype, "workflowSettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ActionSettings }),
    __metadata("design:type", ActionSettings)
], ModuleSettings.prototype, "actionSettings", void 0);
ModuleSettings = __decorate([
    (0, mongoose_1.Schema)()
], ModuleSettings);
exports.ModuleSettings = ModuleSettings;
let Country = class Country {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Country.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Country.prototype, "code", void 0);
Country = __decorate([
    (0, mongoose_1.Schema)()
], Country);
exports.Country = Country;
let Language = class Language {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Language.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Language.prototype, "code", void 0);
Language = __decorate([
    (0, mongoose_1.Schema)()
], Language);
exports.Language = Language;
let IsdCodes = class IsdCodes {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], IsdCodes.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], IsdCodes.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], IsdCodes.prototype, "name", void 0);
IsdCodes = __decorate([
    (0, mongoose_1.Schema)()
], IsdCodes);
exports.IsdCodes = IsdCodes;
//# sourceMappingURL=shared.schema.js.map