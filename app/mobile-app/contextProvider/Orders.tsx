import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const OrdersInfo = createContext(null);
const Orders = ({ children }: any) => {
  const [OrdersList, setOrdersList] = useState<any>([]);
 
  // console.log(children)

  return (
    <OrdersInfo.Provider
      value={{ OrdersList, setOrdersList}}
    >
      {children}
    </OrdersInfo.Provider>
  );
};
export default Orders;
