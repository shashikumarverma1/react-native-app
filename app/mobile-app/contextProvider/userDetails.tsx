import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const GlobalInfo = createContext(null);
const ContextProvider = ({ children }: any) => {
  const [userDetails, setUserDetails] = useState<any>({name:"ram"});
 
  // console.log(children)

  return (
    <GlobalInfo.Provider
      value={{ userDetails, setUserDetails }}
    >
      {children}
    </GlobalInfo.Provider>
  );
};
export default ContextProvider;
