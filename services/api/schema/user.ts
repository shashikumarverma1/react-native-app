import { graphql, list } from "@keystone-6/core";
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  virtual,
} from "@keystone-6/core/fields";

export const User = list({
  access: {
    operation: {
      create: () => true,
      query: () => true,
      update: () => true,
      delete: () => true,
    },
  },
  fields: {
    firstName: text({ validation: { isRequired: true } }),
    lastName:
      text(),
      

    email: text({ isIndexed: "unique" }),
    password: password({ validation: { isRequired: true } }),
    linkedinId:
      text(),

  
  },
  ui: {
    listView: {
      initialColumns: [],
    },
  },
});
