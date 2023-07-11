module.exports = {
  async up(db, client) {
    await db.collection('orgs').insertOne(orgDetails);
    console.log('Orgs data inserted');
  },

  async down(db, client) { }
};


const orgDetails = {
  id: "org-tuv-0001",
  name: "tuv uae",
  orgDisplayName: "tuv ",
  orgLogo: "https://saylordotorg.github.io/text_small-business-management-in-the-21st-century/section_16/469caae9e54375db8c306524bd45c32b.jpg",
  code: "tuv",
  status: "active",
  orgType: "regionalـoffice",
  contact: {
    firstName: 'tuv first name',
    lastName: 'tuv last name',
    phone: '05690909090',
    email: 'tuv@mailinator.com'
  },
  location: {
    name: 'dubai',
    description: 'dubai',
    address: {
      addressType: 'city',
      city: 'dubai',
      street: 'bin zid st',
      provinceState: 'dubai',
      country: 'uae',
      postalCode: '27800',
      latitude: '000000',
      longitude: '000000'
    }
  },
  meta: {
    orgInfo: {
      id: 'org-tuv-0001',
      code: 'tuv',
      name: 'tuv uae',
    },
    createdBy: {
      orgId: 'super-admin',
      performerId: 'super-admin',
    },
    updatedBy: {
      orgId: 'super-admin',
      performerId: 'super-admin',
    },
  },
  moduleSettings: {
    categorySettings: {
      counter: {
        start: 0000,
        value: 0000
      }
    },
    subCategorySettings: {
      counter: {
        start: 0000,
        value: 0000
      }
    },
    productSettings: {
      counter: {
        start: 0000,
        value: 0000
      }
    },
    workspaceSettings: {
      counter: {
        start: 0000,
        value: 0000
      }
    },
    userSettings: {
      counter: {
        start: 0000,
        value: 0000
      }
    },
    nonReleaseSettings: {
      counter: {
        start: 0000,
        value: 0000
      }
    },
    releaseSettings: {
      counter: {
        start: 0000,
        value: 0000
      }
    },
    orderSettings: {
      counter: {
        start: 0000,
        value: 0000
      }
    },
    workflowSettings: {
      counter: {
        start: 0000,
        value: 0000
      }
    },
    actionSettings: {
      counter: {
        start: 0000,
        value: 0000
      }
    },
  },
  createdDate: new Date(),
  updatedDate: new Date(),
}