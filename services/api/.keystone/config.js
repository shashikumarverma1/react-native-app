"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core7 = require("@keystone-6/core");

// auth.ts
var import_crypto = require("crypto");
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  // this is a GraphQL query fragment for fetching what data will be attached to a context.session
  //   this can be helpful for when you are writing your access control functions
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  sessionData: "id ",
  secretField: "password",
  // WARNING: remove initFirstItem functionality in production
  //   see https://keystonejs.com/docs/config/auth#init-first-item for more
  initFirstItem: {
    // if there are no items in the database, by configuring this field
    //   you are asking the Keystone AdminUI to create a new user
    //   providing inputs for these fields
    fields: ["email"]
    // it uses context.sudo() to do this, which bypasses any access control you might have
    //   you shouldn't use this in production
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// schema/class.ts
var import_core = require("@keystone-6/core");
var import_fields = require("@keystone-6/core/fields");

// utils/acess.ts
function isSignedIn({ session: session2 }) {
  return !!session2;
}

// schema/class.ts
var Class = (0, import_core.list)({
  ui: {
    label: "Class"
  },
  access: {
    operation: {
      create: isSignedIn,
      query: isSignedIn,
      update: isSignedIn,
      delete: isSignedIn
    }
  },
  hooks: {
    afterOperation: async ({ context, operation, item }) => {
      if (operation === "create") {
      }
    }
  },
  fields: {
    name: (0, import_fields.text)(),
    school: (0, import_fields.relationship)({ ref: "MySchool" })
  }
});

// schema/myschool.ts
var import_core2 = require("@keystone-6/core");
var import_fields2 = require("@keystone-6/core/fields");
var MySchool = (0, import_core2.list)({
  ui: {
    label: "My School"
  },
  access: {
    operation: {
      create: isSignedIn,
      query: isSignedIn,
      update: isSignedIn,
      delete: isSignedIn
    }
  },
  hooks: {
    afterOperation: async ({ context, operation, item }) => {
      if (operation === "create") {
      }
    }
  },
  fields: {
    name: (0, import_fields2.text)(),
    teacher: (0, import_fields2.relationship)({ ref: "Teacher", many: true }),
    class: (0, import_fields2.relationship)({ ref: "Class", many: true }),
    subject: (0, import_fields2.relationship)({ ref: "Subject", many: true }),
    student: (0, import_fields2.relationship)({ ref: "Student", many: true })
  }
});

// schema/student.ts
var import_core3 = require("@keystone-6/core");
var import_fields3 = require("@keystone-6/core/fields");
var Student = (0, import_core3.list)({
  ui: {
    label: "Student"
  },
  access: {
    operation: {
      create: isSignedIn,
      query: isSignedIn,
      update: isSignedIn,
      delete: isSignedIn
    }
  },
  hooks: {
    afterOperation: async ({ context, operation, item }) => {
      if (operation === "create") {
      }
    }
  },
  fields: {
    name: (0, import_fields3.text)(),
    class: (0, import_fields3.relationship)({ ref: "Class" }),
    subject: (0, import_fields3.relationship)({ ref: "Subject", many: true }),
    gender: (0, import_fields3.select)({
      type: "enum",
      options: [
        { label: "Male", value: "Male" },
        { label: "Female", value: "Female" },
        { label: "Other", value: "Other" }
      ],
      defaultValue: "Male"
    }),
    school: (0, import_fields3.relationship)({ ref: "MySchool" })
  }
});

// schema/subject.ts
var import_core4 = require("@keystone-6/core");
var import_fields4 = require("@keystone-6/core/fields");
var Subject = (0, import_core4.list)({
  ui: {
    label: "Subject"
  },
  access: {
    operation: {
      create: isSignedIn,
      query: isSignedIn,
      update: isSignedIn,
      delete: isSignedIn
    }
  },
  hooks: {
    afterOperation: async ({ context, operation, item }) => {
      if (operation === "create") {
      }
    }
  },
  fields: {
    name: (0, import_fields4.text)(),
    school: (0, import_fields4.relationship)({ ref: "MySchool" })
  }
});

// schema/teachers.ts
var import_core5 = require("@keystone-6/core");
var import_fields5 = require("@keystone-6/core/fields");
var Teacher = (0, import_core5.list)({
  ui: {
    label: "Teachers"
  },
  access: {
    operation: {
      create: isSignedIn,
      query: isSignedIn,
      update: isSignedIn,
      delete: isSignedIn
    }
  },
  hooks: {
    afterOperation: async ({ context, operation, item }) => {
      if (operation === "create") {
      }
    }
  },
  fields: {
    name: (0, import_fields5.text)(),
    school: (0, import_fields5.relationship)({ ref: "MySchool" }),
    gender: (0, import_fields5.select)({
      type: "enum",
      options: [
        { label: "Male", value: "Male" },
        { label: "Female", value: "Female" },
        { label: "Other", value: "Other" }
      ],
      defaultValue: "Male"
    })
  }
});

// schema/user.ts
var import_core6 = require("@keystone-6/core");
var import_fields6 = require("@keystone-6/core/fields");
var User = (0, import_core6.list)({
  access: {
    operation: {
      create: () => true,
      query: () => true,
      update: () => true,
      delete: () => true
    }
  },
  fields: {
    firstName: (0, import_fields6.text)({ validation: { isRequired: true } }),
    lastName: (0, import_fields6.text)(),
    email: (0, import_fields6.text)({ isIndexed: "unique" }),
    password: (0, import_fields6.password)({ validation: { isRequired: true } }),
    linkedinId: (0, import_fields6.text)()
  },
  ui: {
    listView: {
      initialColumns: []
    }
  }
});

// schema/index.ts
var lists = {
  User,
  MySchool,
  Teacher,
  Student,
  Class,
  Subject
};

// keystone.ts
var keystone_default = withAuth(
  (0, import_core7.config)({
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: "sqlite",
      url: "file:./keystone.db"
    },
    lists,
    session
  })
);
//# sourceMappingURL=config.js.map
