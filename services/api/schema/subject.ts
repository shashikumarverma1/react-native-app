
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
import { sendmail, students } from '../utils/mail';

export const Subject = list({
  ui: {
    label: 'Subject',
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
        console.log(operation)
    //   const expoTokens = await context.prisma.PushToken.findMany({});
        // console.log(expoTokens)
        // await pushNotification(expoTokens, item.title);
        students(item)
    }
    },
  },
  fields: {
    name: text(),
    school:relationship({ref:"MySchool"})
    
  },
});
