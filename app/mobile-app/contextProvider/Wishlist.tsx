import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const WishListInfo = createContext(null);
const WishList = ({ children }: any) => {
  const [WishList, setWishList] = useState<any>([]);
 
  // console.log(children)

  return (
    <WishListInfo.Provider
      value={{ WishList, setWishList}}
    >
      {children}
    </WishListInfo.Provider>
  );
};
export default WishList;
