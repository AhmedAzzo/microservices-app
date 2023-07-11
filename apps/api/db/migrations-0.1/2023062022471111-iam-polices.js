module.exports = {
  async up(db, client) {
    await Promise.all(policies.map(async (policy) => {
      await db.collection('iampolicies').insertOne(policy);
    })).then(() => {
      console.log('policies inserted');
    }).catch((err) => {
      console.log('policies insertion failed', err);
    });
  },

  async down(db, client) { }
};


const policies = [
  // org policies
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
  // user policies
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

  // workspace policies
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
  // category policies && sub-category policies
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
  // product policies
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
  // order policies
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

  // release policies
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
  // nonrelease policies
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
  // setting policies
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
  // workflow policies
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

]