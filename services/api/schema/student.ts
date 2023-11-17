
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

export const Student = list({
  ui: {
    label: 'Student',
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
    name: text(),
    class:relationship({ref:"Class"}),
    subject:relationship({ref:"Subject" , many:true}),
    gender: select({
      type: 'enum',
      options: [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' },
      ],
      defaultValue: 'Male'
    }),
     



    school:relationship({ref:"MySchool"}) ,

   
    
  },
});
