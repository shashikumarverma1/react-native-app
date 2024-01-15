import React, { createContext, useEffect, useState } from "react";

export const AgeInfo=createContext(null)

 const AgeProvider=({children}:any)=>{
    const [age , setAge] = useState(0)

    return <AgeInfo.Provider value={{age , setAge}}>
        {children}
    </AgeInfo.Provider>
}
export default AgeProvider



