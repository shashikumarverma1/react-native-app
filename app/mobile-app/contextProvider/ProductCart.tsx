import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const ProductCartInfo = createContext(null);
const ContextProviderProductCart = ({ children }: any) => {
  const [ProductCart, setProductCart] = useState<any>([]);
 
  // console.log(children)

  return (
    <ProductCartInfo.Provider
      value={{ ProductCart, setProductCart }}
    >
      {children}
    </ProductCartInfo.Provider>
  );
};
export default ContextProviderProductCart;
