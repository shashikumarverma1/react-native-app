
import { list } from '@keystone-6/core';
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  multiselect,
  checkbox
} from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';
import { isSignedIn } from '../utils/acess';

export const Page = list({
  ui: {
    label: 'page',
  },
  access: {
    operation: {
      create: isSignedIn,
      query: isSignedIn,
      update: isSignedIn,
      delete: isSignedIn,
    },
  },
  hooks: {
    afterOperation: async ({ context, operation, item }) => {
      if(operation==="create"){
    //   const expoTokens = await context.prisma.PushToken.findMany({});
        // console.log(expoTokens)
        // await pushNotification(expoTokens, item.title);
    }
    },
  },
  fields: {
    title: text(),
     articleId: text(),
    url: text({ validation: { isRequired: true } }),
    
  },
});
