import React, { createContext, useEffect, useState } from "react";
export const AmountInfo = createContext(null);
const ContextProviderAmount = ({ children }: any) => {
  const [Amount, setAmount] = useState<any>(1000);
 
  // console.log(children)

  return (
    <AmountInfo.Provider
      value={{ Amount, setAmount }}
    >
      {children}
    </AmountInfo.Provider>
  );
};
export default ContextProviderAmount;
