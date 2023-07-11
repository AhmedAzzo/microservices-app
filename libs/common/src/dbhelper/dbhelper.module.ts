import {
    Action,
    ActionSchema,
    Category,
    CategorySchema,
    DatabaseModule,
    NoneRelease,
    NoneReleaseSchema,
    Org,
    OrgSchema,
    Product,
    ProductSchema,
    Release,
    ReleaseSchema,
    Role,
    RoleSchema,
    SubCategory,
    SubCategorySchema,
    User,
    UserSchema,
    Workflow,
    WorkflowSchema,
    Workspace,
    WorkspaceSchema,
    IamPolicy,
    IamPolicySchema,
    SettingsSchema,
    Settings,
    Order,
    OrderSchema,
} from '@app/common';
import { Module } from '@nestjs/common';
import { ActionsRepository } from './actions.repository';
import { CategoryRepository } from './category.reporsitory';
import { NoneReleaseRepository } from './noneRelease.reporsitory';
import { OrderRepository } from './order.reporsitory';
import { OrgsRepository } from './orgs.repository';
import { ProductRepository } from './product.repository';
import { ReleaseRepository } from './release.repository';
import { RolesRepository } from './roles.repository';
import { SettingsRepository } from './settings.reporsitory';
import { SubCategoryRepository } from './subCategory.reporsitory';
import { UsersRepository } from './users.repository';
import { WorkflowRepository } from './workflow.repository';
import { WorkspaceRepository } from './workspace.repository';


@Module({
    imports: [
        DatabaseModule,
        DatabaseModule.forFeature([
            { name: Action.name, schema: ActionSchema },
            { name: Category.name, schema: CategorySchema },
            { name: SubCategory.name, schema: SubCategorySchema },
            { name: NoneRelease.name, schema: NoneReleaseSchema },
            { name: Product.name, schema: ProductSchema },
            { name: Release.name, schema: ReleaseSchema },
            { name: Workflow.name, schema: WorkflowSchema },
            { name: User.name, schema: UserSchema },
            { name: Role.name, schema: RoleSchema },
            { name: Org.name, schema: OrgSchema },
            { name: Workspace.name, schema: WorkspaceSchema },
            { name: IamPolicy.name, schema: IamPolicySchema },
            { name: Settings.name, schema: SettingsSchema },
            { name: NoneRelease.name, schema: NoneReleaseSchema },
            { name: Release.name, schema: ReleaseSchema },
            { name: Order.name, schema: OrderSchema },
        ]),
    ],
    controllers: [],
    providers: [
        WorkspaceRepository,
        CategoryRepository,
        SubCategoryRepository,
        NoneReleaseRepository,
        OrderRepository,
        OrgsRepository,
        ProductRepository,
        ReleaseRepository,
        SettingsRepository,
        WorkflowRepository,
        UsersRepository,
        RolesRepository,
        ActionsRepository
    ],
    exports: [
        WorkspaceRepository,
        CategoryRepository,
        SubCategoryRepository,
        NoneReleaseRepository,
        OrderRepository,
        OrgsRepository,
        ProductRepository,
        ReleaseRepository,
        SettingsRepository,
        WorkflowRepository,
        UsersRepository,
        RolesRepository,
        ActionsRepository,
    ],
})
export class DbHelperModule { }
