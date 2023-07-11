"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbHelperModule = void 0;
const common_1 = require("@app/common");
const common_2 = require("@nestjs/common");
const actions_repository_1 = require("./actions.repository");
const category_reporsitory_1 = require("./category.reporsitory");
const noneRelease_reporsitory_1 = require("./noneRelease.reporsitory");
const order_reporsitory_1 = require("./order.reporsitory");
const orgs_repository_1 = require("./orgs.repository");
const product_repository_1 = require("./product.repository");
const release_repository_1 = require("./release.repository");
const roles_repository_1 = require("./roles.repository");
const settings_reporsitory_1 = require("./settings.reporsitory");
const subCategory_reporsitory_1 = require("./subCategory.reporsitory");
const users_repository_1 = require("./users.repository");
const workflow_repository_1 = require("./workflow.repository");
const workspace_repository_1 = require("./workspace.repository");
let DbHelperModule = class DbHelperModule {
};
DbHelperModule = __decorate([
    (0, common_2.Module)({
        imports: [
            common_1.DatabaseModule,
            common_1.DatabaseModule.forFeature([
                { name: common_1.Action.name, schema: common_1.ActionSchema },
                { name: common_1.Category.name, schema: common_1.CategorySchema },
                { name: common_1.SubCategory.name, schema: common_1.SubCategorySchema },
                { name: common_1.NoneRelease.name, schema: common_1.NoneReleaseSchema },
                { name: common_1.Product.name, schema: common_1.ProductSchema },
                { name: common_1.Release.name, schema: common_1.ReleaseSchema },
                { name: common_1.Workflow.name, schema: common_1.WorkflowSchema },
                { name: common_1.User.name, schema: common_1.UserSchema },
                { name: common_1.Role.name, schema: common_1.RoleSchema },
                { name: common_1.Org.name, schema: common_1.OrgSchema },
                { name: common_1.Workspace.name, schema: common_1.WorkspaceSchema },
                { name: common_1.IamPolicy.name, schema: common_1.IamPolicySchema },
                { name: common_1.Settings.name, schema: common_1.SettingsSchema },
                { name: common_1.NoneRelease.name, schema: common_1.NoneReleaseSchema },
                { name: common_1.Release.name, schema: common_1.ReleaseSchema },
                { name: common_1.Order.name, schema: common_1.OrderSchema },
            ]),
        ],
        controllers: [],
        providers: [
            workspace_repository_1.WorkspaceRepository,
            category_reporsitory_1.CategoryRepository,
            subCategory_reporsitory_1.SubCategoryRepository,
            noneRelease_reporsitory_1.NoneReleaseRepository,
            order_reporsitory_1.OrderRepository,
            orgs_repository_1.OrgsRepository,
            product_repository_1.ProductRepository,
            release_repository_1.ReleaseRepository,
            settings_reporsitory_1.SettingsRepository,
            workflow_repository_1.WorkflowRepository,
            users_repository_1.UsersRepository,
            roles_repository_1.RolesRepository,
            actions_repository_1.ActionsRepository
        ],
        exports: [
            workspace_repository_1.WorkspaceRepository,
            category_reporsitory_1.CategoryRepository,
            subCategory_reporsitory_1.SubCategoryRepository,
            noneRelease_reporsitory_1.NoneReleaseRepository,
            order_reporsitory_1.OrderRepository,
            orgs_repository_1.OrgsRepository,
            product_repository_1.ProductRepository,
            release_repository_1.ReleaseRepository,
            settings_reporsitory_1.SettingsRepository,
            workflow_repository_1.WorkflowRepository,
            users_repository_1.UsersRepository,
            roles_repository_1.RolesRepository,
            actions_repository_1.ActionsRepository,
        ],
    })
], DbHelperModule);
exports.DbHelperModule = DbHelperModule;
//# sourceMappingURL=dbhelper.module.js.map