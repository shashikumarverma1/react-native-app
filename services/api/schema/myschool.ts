
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

export const MySchool = list({
  ui: {
    label: 'My School',
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
    teacher:relationship({ref:"Teacher" , many:true}),
    class:relationship({ref:"Class"  , many:true}) ,
    subject:relationship({ref:"Subject" , many:true}),
    student:relationship({ref:"Student" , many:true}),
   

    
  },
});
