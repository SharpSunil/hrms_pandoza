import { createContext, useState } from "react";



export const UserContext = createContext();

const ContextProvider = ({children})=>{

    const [ user, setUser ] = useState();

    return(
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}

export default ContextProvider