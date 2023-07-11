module.exports = {
  async up(db, client) {
    let roles_counter = await db.collection('roles').find({}).count() || 0;
    await Promise.all(roles?.map(async (role) => {
      roles_counter = roles_counter + 1;
      const id = roles_counter;
      await db.collection('roles').insertOne({ ...role, id });
    })).then((added) => {
      console.log('added role successfully');
    }).catch((err) => {
      console.log('failed to add role', err);
    });
  },

  async down(db, client) { }
};


const roles = [
  // Orgs Manager
  {
    status: "active",
    code: "orgs_manager_role",
    name: "Orgs Manager",
    description: "A role gives the user the ability to manage orgs",
    iampolicies: [
      {
        "policyName": "org_c_o",
        "controller": "orgs",
        "policy": {
          "action": "create",
          "scope": "org"
        },
      },
      {
        "policyName": "org_r_o",
        "controller": "orgs",
        "policy": {
          "action": "read",
          "scope": "org"
        },
      },
      {
        "policyName": "org_u_o",
        "controller": "orgs",
        "policy": {
          "action": "update",
          "scope": "org"
        },
      },
      {
        "policyName": "org_d_o",
        "controller": "orgs",
        "policy": {
          "action": "delete",
          "scope": "org"
        },
      },
    ],
    createdDate: new Date(),
    updatedDate: new Date(),
  },
  // Users Manager
  {
    status: "active",
    code: "users_manager_role",
    name: "Users Manager",
    description: "A role gives the user the ability to manage users",
    iampolicies: [
      {
        "policyName": "user_c_o",
        "controller": "users",
        "policy": {
          "action": "create",
          "scope": "user"
        },
      },
      {
        "policyName": "user_r_o",
        "controller": "users",
        "policy": {
          "action": "read",
          "scope": "user"
        },
      },
      {
        "policyName": "user_u_o",
        "controller": "users",
        "policy": {
          "action": "update",
          "scope": "user"
        },
      },
      {
        "policyName": "user_d_o",
        "controller": "users",
        "policy": {
          "action": "delete",
          "scope": "user"
        },
      },
    ],
    createdDate: new Date(),
    updatedDate: new Date(),
  },
  // Roles Manager
  {
    status: "active",
    code: "workspaces_manager_role",
    name: "Workspaces Manager",
    description: "A role gives the user the ability to manage workspaces",
    iampolicies: [
      {
        "policyName": "workspace_c_o",
        "controller": "workspaces",
        "policy": {
          "action": "create",
          "scope": "workspace"
        },
      },
      {
        "policyName": "workspace_r_o",
        "controller": "workspaces",
        "policy": {
          "action": "read",
          "scope": "workspace"
        },
      },
      {
        "policyName": "workspace_u_o",
        "controller": "workspaces",
        "policy": {
          "action": "update",
          "scope": "workspace"
        },
      },
      {
        "policyName": "workspace_d_o",
        "controller": "workspaces",
        "policy": {
          "action": "delete",
          "scope": "workspace"
        },
      },
    ],
    createdDate: new Date(),
    updatedDate: new Date(),
  },
  // Categorys Manager
  {
    status: "active",
    code: "category_manager_role",
    name: "Category Manager",
    description: "A role gives the user the ability to manage categories",
    iampolicies: [
      {
        "policyName": "category_c_o",
        "controller": "categorys",
        "policy": {
          "action": "create",
          "scope": "category"
        },
      },
      {
        "policyName": "category_r_o",
        "controller": "categorys",
        "policy": {
          "action": "read",
          "scope": "category"
        },
      },
      {
        "policyName": "category_u_o",
        "controller": "categorys",
        "policy": {
          "action": "update",
          "scope": "category"
        },
      },
      {
        "policyName": "category_d_o",
        "controller": "categorys",
        "policy": {
          "action": "delete",
          "scope": "category"
        },
      },
    ],
    createdDate: new Date(),
    updatedDate: new Date(),
  },
  // Products Manager
  {
    status: "active",
    code: "product_manager_role",
    name: "Product Manager",
    description: "A role gives the user the ability to manage products",
    iampolicies: [
      {
        "policyName": "product_c_o",
        "controller": "products",
        "policy": {
          "action": "create",
          "scope": "product"
        },
      },
      {
        "policyName": "product_r_o",
        "controller": "products",
        "policy": {
          "action": "read",
          "scope": "product"
        },
      },
      {
        "policyName": "product_u_o",
        "controller": "products",
        "policy": {
          "action": "update",
          "scope": "product"
        },
      },
      {
        "policyName": "product_d_o",
        "controller": "products",
        "policy": {
          "action": "delete",
          "scope": "product"
        },
      },
    ],
    createdDate: new Date(),
    updatedDate: new Date(),
  },
  // Orders Manager
  {
    status: "active",
    code: "order_manager_role",
    name: "Order Manager",
    description: "A role gives the user the ability to manage orders",
    iampolicies: [
      {
        "policyName": "order_c_o",
        "controller": "orders",
        "policy": {
          "action": "create",
          "scope": "order"
        },
      },
      {
        "policyName": "order_r_o",
        "controller": "orders",
        "policy": {
          "action": "read",
          "scope": "order"
        },
      },
      {
        "policyName": "order_u_o",
        "controller": "orders",
        "policy": {
          "action": "update",
          "scope": "order"
        },
      },
      {
        "policyName": "order_d_o",
        "controller": "orders",
        "policy": {
          "action": "delete",
          "scope": "order"
        },
      },
    ],
    createdDate: new Date(),
    updatedDate: new Date(),
  },
  // Releases Manager
  {
    status: "active",
    code: "release_manager_role",
    name: "Release Manager",
    description: "A role gives the user the ability to manage releases",
    iampolicies: [
      {
        "policyName": "release_c_o",
        "controller": "releases",
        "policy": {
          "action": "create",
          "scope": "release"
        },
      },
      {
        "policyName": "release_r_o",
        "controller": "releases",
        "policy": {
          "action": "read",
          "scope": "release"
        },
      },
      {
        "policyName": "release_u_o",
        "controller": "releases",
        "policy": {
          "action": "update",
          "scope": "release"
        },
      },
      {
        "policyName": "release_d_o",
        "controller": "releases",
        "policy": {
          "action": "delete",
          "scope": "release"
        },
      },
    ],
    createdDate: new Date(),
    updatedDate: new Date(),
  },
  // Nonreleases Manager
  {
    status: "active",
    code: "nonrelease_manager_role",
    name: "Non Release Manager",
    description: "A role gives the user the ability to manage Non Releases",
    iampolicies: [
      {
        "policyName": "nonrelease_c_o",
        "controller": "nonreleases",
        "policy": {
          "action": "create",
          "scope": "nonrelease"
        },
      },
      {
        "policyName": "nonrelease_r_o",
        "controller": "nonreleases",
        "policy": {
          "action": "read",
          "scope": "nonrelease"
        },
      },
      {
        "policyName": "nonrelease_u_o",
        "controller": "nonreleases",
        "policy": {
          "action": "update",
          "scope": "nonrelease"
        },
      },
      {
        "policyName": "nonrelease_d_o",
        "controller": "nonreleases",
        "policy": {
          "action": "delete",
          "scope": "nonrelease"
        },
      },
    ],
    createdDate: new Date(),
    updatedDate: new Date(),
  },

  // Settings Manager
  {
    status: "active",
    code: "setting_manager_role",
    name: "Settings Manager",
    description: "A role gives the user the ability to manage Non Settings",
    iampolicies: [
      {
        "policyName": "setting_c_o",
        "controller": "settings",
        "policy": {
          "action": "create",
          "scope": "setting"
        },
      },
      {
        "policyName": "setting_r_o",
        "controller": "settings",
        "policy": {
          "action": "read",
          "scope": "setting"
        },
      },
      {
        "policyName": "setting_u_o",
        "controller": "settings",
        "policy": {
          "action": "update",
          "scope": "setting"
        },
      },
      {
        "policyName": "setting_d_o",
        "controller": "settings",
        "policy": {
          "action": "delete",
          "scope": "setting"
        },
      },
    ],
    createdDate: new Date(),
    updatedDate: new Date(),
  },

  // Workflows Manager
  {
    status: "active",
    code: "workflow_manager_role",
    name: "Workflows Manager",
    description: "A role gives the user the ability to manage Non Workflows",
    iampolicies: [
      {
        "policyName": "workflow_r_o",
        "controller": "workflows",
        "policy": {
          "action": "read",
          "scope": "workflow"
        },
      },
      {
        "policyName": "workflow_r_o",
        "controller": "workflows",
        "policy": {
          "action": "read",
          "scope": "workflow"
        },
      },
      {
        "policyName": "workflow_u_o",
        "controller": "workflows",
        "policy": {
          "action": "update",
          "scope": "workflow"
        },
      },
      {
        "policyName": "workflow_d_o",
        "controller": "workflows",
        "policy": {
          "action": "delete",
          "scope": "workflow"
        },
      },
    ],
    createdDate: new Date(),
    updatedDate: new Date(),
  },
]